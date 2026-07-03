export function initCarouselClick(selector) {
  const el = document.querySelector(selector);
  if (!el || !window.jQuery) return;

  el.classList.add('carousel--click-nav');

  el.addEventListener('click', (e) => {
    if (e.target.closest('.carousel-indicators')) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const $el = window.jQuery(el);

    if (x < rect.width / 2) {
      $el.carousel('prev');
    } else {
      $el.carousel('next');
    }
  });
}
