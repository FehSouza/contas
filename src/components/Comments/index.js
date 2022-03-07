import { createElement } from '../../utils/createElement/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('Comments');

export const Comments = () => {
  const calcCharacters = (event) => {
    const rest = 200 - event.target.value.length;
    if (rest === 0) return ($quantityCharacters.textContent = ``);
    if (rest === 1) return ($quantityCharacters.textContent = `Resta ${rest} carácter.`);
    return ($quantityCharacters.textContent = `Restam ${rest} caracteres.`);
  };

  const $quantityCharacters = createElement('span', {
    class: 'quantity-characters',
    textContent: 'Restam 200 caracteres.',
  });
  const $commentsWrapper = createElement('textarea', {
    class: 'comments-wrapper',
    placeholder: 'Obs...',
    maxLength: '200',
    onKeyup: calcCharacters,
  });

  const $commentsContent = createElement('div', {
    class: 'comments-content',
    children: [$commentsWrapper, $quantityCharacters],
  });
  return $commentsContent;
};
