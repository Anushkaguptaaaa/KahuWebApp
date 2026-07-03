const LEGACY_PATHS = {
  '/index.html': '/',
  '/about_page.html': '/about',
  '/gallery.html': '/gallery',
  '/contact.html': '/contact',
  '/results.html': '/results',
};

const ROUTES = {
  '/': {
    title: 'Kahu',
    bodyClass: 'main-layout coquette-home',
    coquette: true,
  },
  '/about': {
    title: 'About — Kahu',
    bodyClass: 'coquette-page',
    coquette: true,
  },
  '/gallery': {
    title: 'Gallery of Fame — Kahu',
    bodyClass: 'coquette-page',
    coquette: true,
  },
  '/contact': {
    title: 'Contact — Kahu',
    bodyClass: 'coquette-page',
    coquette: true,
  },
  '/results': {
    title: 'Breed Results — Kahu',
    bodyClass: 'results-page',
    coquette: false,
  },
};

function normalizePath(pathname) {
  if (LEGACY_PATHS[pathname]) {
    return LEGACY_PATHS[pathname];
  }
  if (ROUTES[pathname]) {
    return pathname;
  }
  return '/';
}

export function createRouter({ pages, onRouteChange }) {
  let currentPath = '/';

  function setActiveNav(path) {
    document.querySelectorAll('[data-nav]').forEach((link) => {
      const href = link.getAttribute('href');
      const li = link.closest('li');
      if (!li) return;
      li.classList.toggle('active', href === path);
    });
  }

  function applyBodyClass(bodyClass) {
    document.body.className = bodyClass;
  }

  function navigate(path, { replace = false } = {}) {
    const normalized = normalizePath(path);

    if (normalized !== path && !replace) {
      history.replaceState({ path: normalized }, '', normalized);
    } else if (replace) {
      history.replaceState({ path: normalized }, '', normalized);
    } else if (normalized !== currentPath) {
      history.pushState({ path: normalized }, '', normalized);
    }

    currentPath = normalized;
    const route = ROUTES[normalized] || ROUTES['/'];
    const container = document.getElementById('app');

    document.title = route.title;
    applyBodyClass(route.bodyClass);
    container.innerHTML = '';

    const ctx = { navigate, setActiveNav };
    pages[normalized](container, ctx);

    window.scrollTo(0, 0);
    onRouteChange?.(normalized, route);
  }

  function handleLinkClick(e) {
    const link = e.target.closest('a[data-nav]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:')) return;

    e.preventDefault();
    navigate(href);
  }

  function start() {
    document.addEventListener('click', handleLinkClick);

    window.addEventListener('popstate', () => {
      navigate(window.location.pathname, { replace: true });
    });

    navigate(window.location.pathname, { replace: true });
  }

  return { navigate, start, setActiveNav };
}
