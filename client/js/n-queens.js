window.initNQueensGame = function () {
  var boardEl = document.getElementById('nqueens-board');
  if (!boardEl) return;

  var DIFFICULTIES = {
    easy: { n: 4, label: 'Easy' },
    medium: { n: 6, label: 'Medium' },
    hard: { n: 8, label: 'Hard' },
  };

  var placedEl = document.getElementById('nqueens-placed');
  var statusEl = document.getElementById('nqueens-status');
  var winEl = document.getElementById('nqueens-win');
  var restartBtn = document.getElementById('nqueens-restart');
  var playAgainBtn = document.getElementById('nqueens-play-again');
  var difficultyBtns = document.querySelectorAll('[data-nqueens-difficulty]');

  if (!placedEl || !statusEl || !restartBtn) return;

  var n = DIFFICULTIES.easy.n;
  var queens = [];
  var solved = false;

  function sameDiagonal(a, b) {
    return Math.abs(a.row - b.row) === Math.abs(a.col - b.col);
  }

  function attacks(a, b) {
    return a.row === b.row || a.col === b.col || sameDiagonal(a, b);
  }

  function hasConflict(queen) {
    return queens.some(function (other) {
      return other !== queen && attacks(queen, other);
    });
  }

  function findQueen(row, col) {
    for (var i = 0; i < queens.length; i++) {
      if (queens[i].row === row && queens[i].col === col) return i;
    }
    return -1;
  }

  function updateStats() {
    placedEl.textContent = queens.length + ' / ' + n;

    if (solved) {
      statusEl.textContent = 'Solved!';
      return;
    }

    if (queens.length === 0) {
      statusEl.textContent = 'Place ' + n + ' queens';
      return;
    }

    var conflicted = queens.some(hasConflict);
    if (conflicted) {
      statusEl.textContent = 'Queens are attacking';
    } else if (queens.length < n) {
      statusEl.textContent = (n - queens.length) + ' more to go';
    } else {
      statusEl.textContent = 'Almost… check attacks';
    }
  }

  function paintBoard() {
    var cells = boardEl.querySelectorAll('.nqueens-cell');
    cells.forEach(function (cell) {
      var row = Number(cell.getAttribute('data-row'));
      var col = Number(cell.getAttribute('data-col'));
      var qi = findQueen(row, col);
      var hasQueen = qi !== -1;

      cell.classList.toggle('has-queen', hasQueen);
      cell.classList.remove('is-conflict', 'is-attacked');
      cell.setAttribute('aria-pressed', hasQueen ? 'true' : 'false');

      var queenImage = cell.querySelector('.nqueens-cell__queen');
      var isConflict = hasQueen && hasConflict(queens[qi]);

      if (isConflict) {
        cell.classList.add('is-conflict');
      }

      if (queenImage) {
        queenImage.src = isConflict ? 'images/angy.jpeg' : 'images/queen.jpeg';
      }
    });

    if (queens.length > 0 && !solved) {
      queens.forEach(function (queen) {
        cells.forEach(function (cell) {
          var row = Number(cell.getAttribute('data-row'));
          var col = Number(cell.getAttribute('data-col'));
          if (findQueen(row, col) !== -1) return;
          if (attacks(queen, { row: row, col: col })) {
            cell.classList.add('is-attacked');
          }
        });
      });
    }
  }

  function checkWin() {
    if (queens.length !== n) return false;
    return !queens.some(hasConflict);
  }

  function onCellClick(row, col) {
    if (solved) return;

    var existing = findQueen(row, col);
    if (existing !== -1) {
      queens.splice(existing, 1);
    } else {
      if (queens.length >= n) return;
      queens.push({ row: row, col: col });
    }

    paintBoard();
    updateStats();

    if (checkWin()) {
      solved = true;
      updateStats();
      if (winEl) winEl.classList.add('is-visible');
    }
  }

  function buildBoard() {
    boardEl.innerHTML = '';
    boardEl.style.setProperty('--nqueens-n', String(n));
    boardEl.setAttribute('data-size', String(n));

    for (var row = 0; row < n; row++) {
      for (var col = 0; col < n; col++) {
        (function (r, c) {
          var cell = document.createElement('button');
          cell.type = 'button';
          cell.className = 'nqueens-cell' + ((r + c) % 2 === 0 ? ' nqueens-cell--light' : ' nqueens-cell--dark');
          cell.setAttribute('data-row', String(r));
          cell.setAttribute('data-col', String(c));
          cell.setAttribute('aria-label', 'Row ' + (r + 1) + ', column ' + (c + 1));
          cell.setAttribute('aria-pressed', 'false');

          var mark = document.createElement('img');
          mark.className = 'nqueens-cell__queen';
          mark.src = 'images/queen.jpeg';
          mark.alt = '';
          mark.setAttribute('aria-hidden', 'true');
          cell.appendChild(mark);

          cell.addEventListener('click', function () {
            onCellClick(r, c);
          });

          boardEl.appendChild(cell);
        })(row, col);
      }
    }
  }

  function setDifficulty(key) {
    var config = DIFFICULTIES[key] || DIFFICULTIES.easy;
    n = config.n;

    difficultyBtns.forEach(function (btn) {
      var active = btn.getAttribute('data-nqueens-difficulty') === key;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    startGame();
  }

  function startGame() {
    queens = [];
    solved = false;
    if (winEl) winEl.classList.remove('is-visible');
    buildBoard();
    updateStats();
  }

  difficultyBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      setDifficulty(btn.getAttribute('data-nqueens-difficulty'));
    });
  });

  restartBtn.addEventListener('click', startGame);
  if (playAgainBtn) {
    playAgainBtn.addEventListener('click', startGame);
  }

  setDifficulty('easy');
};
