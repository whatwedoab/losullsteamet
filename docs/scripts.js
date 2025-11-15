// Run custom JS when the page is ready
domReady([
  showCookieBanner,
]);

/**
 * DOM ready helper function
 *
 * @param callbacks
 */
function domReady(callbacks) {
  callbacks.forEach((callback) => {
    if (document.readyState !== 'loading') {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback, {
        passive: true,
      });
    }
  });
}

/**
 * Simplified cookie banner
 */
function showCookieBanner() {
  const banner = document.querySelector('#cookie-banner');
  if(!banner) return;

  const acceptBtn = banner.querySelector('#cookie-button');
  if (!acceptBtn) return;

  const hasAcceptedCookies = localStorage.getItem('cookiesAccepted') === 'true';

  if (!hasAcceptedCookies) {
    banner.style.display = 'block';
  }

  acceptBtn.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'true');
    banner.style.display = 'none';
  });
}
