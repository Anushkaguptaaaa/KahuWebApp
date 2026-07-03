export function renderResults(container, { navigate }) {
  const raw = sessionStorage.getItem('kahuUploadResult');
  if (!raw) {
    navigate('/');
    return;
  }

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    navigate('/');
    return;
  }

  const breeds = data.breeds || [];
  const top = breeds[0];

  const imageHtml = data.imageDataUrl
    ? `<div class="results-image-card"><div class="results-image-wrap"><img src="${data.imageDataUrl}" alt="Your uploaded cat"></div></div>`
    : '';

  let resultHtml;

  if (top) {
    const confidencePct = top.confidence ? Math.round(top.confidence * 100) : null;
    const altBreeds = breeds.slice(1);
    let altHtml = '';

    if (altBreeds.length) {
      altHtml =
        '<div class="results-alt-breeds"><p class="results-alt-title">Other possibilities</p><div class="results-alt-list">' +
        altBreeds
          .map((b) => {
            const pct = b.confidence ? Math.round(b.confidence * 100) + '%' : '';
            return `<span class="results-alt-chip">${b.name}${pct ? ' · ' + pct : ''}</span>`;
          })
          .join('') +
        '</div></div>';
    }

    resultHtml = `
      <div class="results-card">
        <p class="results-label">♡ Identified breed</p>
        <h1 class="results-breed">${top.name}</h1>
        ${
          confidencePct !== null
            ? `<p class="results-confidence"><strong>${confidencePct}%</strong> match confidence</p>`
            : ''
        }
        <div class="results-actions">
          <a href="/" class="results-btn results-btn-primary" data-nav>Upload another</a>
          <a href="/gallery" class="results-btn results-btn-secondary" data-nav>Browse breeds</a>
        </div>
        ${altHtml}
      </div>
    `;
  } else {
    resultHtml = `
      <div class="results-card">
        <p class="results-empty">${data.message || 'No cat breed could be identified in this image.'}</p>
        <div class="results-actions" style="margin-top:24px">
          <a href="/" class="results-btn results-btn-primary" data-nav>Try another photo</a>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <header class="results-header">
      <a href="/" class="results-logo" data-nav>
        <img src="images/logo.png" alt="Kahu">
      </a>
      <a href="/" class="results-back" data-nav><i class="fa fa-arrow-left"></i> Back to Home</a>
    </header>
    <main class="results-container">
      ${imageHtml}${resultHtml}
    </main>
  `;
}
