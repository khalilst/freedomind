var hostname = window.location.hostname;

if (['www.linkedin.com', 'linkedin.com'].indexOf(hostname) !== -1) {
  logo = document.querySelector('.global-nav__logo');
  logo.setAttribute('src', 'https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg');
  logo.setAttribute('style', 'height: auto !important');
}
