import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/components/AccountAdd/styles.css');

export const AccountAdd = (category, typeCategory, wallet) => {
  const $categoryColor = Element('div', { class: 'category-color-account' });

  if (category === 'food') $categoryColor.classList.add('color-cyan');
  if (category === 'house') $categoryColor.classList.add('color-brown');
  if (category === 'education') $categoryColor.classList.add('color-pink');
  if (category === 'health') $categoryColor.classList.add('color-orange');
  if (category === 'transport') $categoryColor.classList.add('color-yellow');

  const $typeInCategory = Element('span', { class: 'type-category-account', children: typeCategory });
  const $wallet = Element('span', { class: 'wallet-account', children: wallet });
  const $wrapper = Element('div', { class: 'category-and-wallet', children: [$typeInCategory, $wallet] })

  const $accountWrapper = Element('div', { class: 'account-wrapper', children: [$categoryColor, $wrapper] });

  return $accountWrapper;
};
