window.initMemoryGame = function () {
  var boardEl = document.getElementById('memory-board');
  if (!boardEl) return;

  var FACES = [
    'images/face-1.jpg',
    'images/face-2.jpg',
    'images/face-3.jpeg',
    'images/face-4.jpg',
    'images/face-5.jpeg',
    'images/face-6.jpg',
    'images/face-7.jpg',
    'images/face-10.jpg',
  ];

  var COVER_SRC = 'images/cover.jpeg';

  var movesEl = document.getElementById('memory-moves');
  var pairsEl = document.getElementById('memory-pairs');
  var winEl = document.getElementById('memory-win');
  var restartBtn = document.getElementById('memory-restart');
  var playAgainBtn = document.getElementById('memory-play-again');

  if (!movesEl || !pairsEl || !restartBtn) return;

  var flipped = [];
  var lock = false;
  var moves = 0;
  var matchedCount = 0;

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function buildDeck() {
    var deck = [];
    FACES.forEach(function (src, index) {
      deck.push({ id: index, src: src });
      deck.push({ id: index, src: src });
    });
    return shuffle(deck);
  }

  function createCard(card, index) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'memory-card';
    btn.setAttribute('data-index', String(index));
    btn.setAttribute('data-id', String(card.id));
    btn.innerHTML =
      '<div class="memory-card__inner">' +
      '<div class="memory-card__face memory-card__back">' +
      '<img src="' +
      COVER_SRC +
      '" alt="">' +
      '</div>' +
      '<div class="memory-card__face memory-card__front">' +
      '<img src="' +
      card.src +
      '" alt="Cat">' +
      '</div>' +
      '</div>';
    btn.addEventListener('click', onCardClick);
    return btn;
  }

  function updateStats() {
    movesEl.textContent = String(moves);
    pairsEl.textContent = matchedCount + ' / ' + FACES.length;
  }

  function onCardClick(e) {
    var card = e.currentTarget;
    if (lock || card.classList.contains('is-flipped') || card.classList.contains('is-matched')) {
      return;
    }

    card.classList.add('is-flipped');
    flipped.push(card);

    if (flipped.length < 2) return;

    moves++;
    updateStats();
    lock = true;

    var a = flipped[0];
    var b = flipped[1];

    if (a.getAttribute('data-id') === b.getAttribute('data-id')) {
      a.classList.add('is-matched');
      b.classList.add('is-matched');
      matchedCount++;
      updateStats();
      flipped = [];
      lock = false;

      if (matchedCount === FACES.length && winEl) {
        winEl.classList.add('is-visible');
      }
      return;
    }

    setTimeout(function () {
      a.classList.remove('is-flipped');
      b.classList.remove('is-flipped');
      flipped = [];
      lock = false;
    }, 800);
  }

  function startGame() {
    flipped = [];
    lock = false;
    moves = 0;
    matchedCount = 0;
    if (winEl) winEl.classList.remove('is-visible');
    updateStats();

    boardEl.innerHTML = '';
    buildDeck().forEach(function (card, index) {
      boardEl.appendChild(createCard(card, index));
    });
  }

  restartBtn.onclick = startGame;
  if (playAgainBtn) {
    playAgainBtn.onclick = startGame;
  }

  startGame();
};
