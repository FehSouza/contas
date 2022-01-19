import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/components/AccountAdd/styles.css');

export const AccountAdd = (category, typeCategory, wallet) => {
  const $categoryColor = Element('div', { class: 'account-category-color' });

  if (category === 'food') $categoryColor.classList.add('color-cyan');
  if (category === 'house') $categoryColor.classList.add('color-brown');
  if (category === 'education') $categoryColor.classList.add('color-pink');
  if (category === 'health') $categoryColor.classList.add('color-orange');
  if (category === 'transport') $categoryColor.classList.add('color-yellow');

  const $category = Element('span', { class: 'account-category', children: typeCategory });
  const $wallet = Element('span', { class: 'account-wallet', children: wallet });
  const $categoryAndWallet = Element('div', { class: 'account-category-and-wallet', children: [$category, $wallet] });

  const $accountWrapper = Element('div', { class: 'account-wrapper', children: [$categoryColor, $categoryAndWallet] });

  return $accountWrapper;
};
