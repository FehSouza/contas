import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/components/Comments/styles.css');

export const Comments = () => {
  const calcCharacters = (event) => {
    const rest = 200 - event.target.value.length;
    if (rest === 0) return ($quantityCharacters.textContent = ``);
    if (rest === 1) return ($quantityCharacters.textContent = `Resta ${rest} carácter.`);
    return ($quantityCharacters.textContent = `Restam ${rest} caracteres.`);
  };

  const $quantityCharacters = Element('span', { class: 'quantity-characters', children: 'Restam 200 caracteres.' });
  const $commentsWrapper = Element('textarea', {
    class: 'comments-wrapper',
    placeholder: 'Obs...',
    maxLength: '200',
    onKeyup: calcCharacters,
  });

  const $commentsContent = Element('div', {
    class: 'comments-content',
    children: [$commentsWrapper, $quantityCharacters],
  });
  return $commentsContent;
};
