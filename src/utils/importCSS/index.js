export const importCSS = (path) => {
  const $head = document.querySelector('head');
  const $link = document.createElement('link');
  $link.setAttribute('rel', 'stylesheet');
  $link.setAttribute('href', path);
  $head.appendChild($link);
};
