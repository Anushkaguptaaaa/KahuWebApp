import { createRouter } from './router.js';
import { renderHome } from './pages/home.js';
import { renderAbout } from './pages/about.js';
import { renderGallery } from './pages/gallery.js';
import { renderContact } from './pages/contact.js';
import { renderResults } from './pages/results.js';
import { initJoeyChat } from './features/joey-chat.js';
import { initPageLoader, hideLoader, isLoaderReady } from './features/loader.js';

const pages = {
  '/': renderHome,
  '/about': renderAbout,
  '/gallery': renderGallery,
  '/contact': renderContact,
  '/results': renderResults,
};

const router = createRouter({
  pages,
  onRouteChange() {
    if (isLoaderReady()) {
      hideLoader();
    }
  },
});

function boot() {
  initJoeyChat();
  router.start();
}

initPageLoader(boot);
