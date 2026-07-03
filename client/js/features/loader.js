const MIN_LOAD_MS = 1200;
let loaderReady = false;
let loadStartedAt = 0;

function getLoader() {
  return document.getElementById('loader_bg');
}

function restartLoaderGif() {
  const img = getLoader()?.querySelector('img');
  if (!img) return;
  const base = (img.getAttribute('src') || 'images/loading.gif').split('?')[0];
  img.src = `${base}?t=${Date.now()}`;
}

export function showLoader() {
  const loader = getLoader();
  if (loader) {
    loader.style.display = 'block';
    restartLoaderGif();
  }
}

export function hideLoader() {
  const loader = getLoader();
  if (loader) {
    loader.style.display = 'none';
  }
}

export function isLoaderReady() {
  return loaderReady;
}

export function initPageLoader(runApp) {
  loaderReady = false;
  loadStartedAt = Date.now();
  showLoader();

  runApp();

  const finish = () => {
    const elapsed = Date.now() - loadStartedAt;
    const remaining = Math.max(0, MIN_LOAD_MS - elapsed);
    setTimeout(() => {
      hideLoader();
      loaderReady = true;
    }, remaining);
  };

  if (document.readyState === 'complete') {
    finish();
  } else {
    window.addEventListener('load', finish, { once: true });
  }
}
