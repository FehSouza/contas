import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/components/Bill/styles.css');

export const Bill = ({ category, title, wallet, amount, status }) => {
  const $category = Element('div', { class: 'account-category' });
  if (category === 'food') $category.classList.add('color-cyan');
  if (category === 'house') $category.classList.add('color-brown');
  if (category === 'education') $category.classList.add('color-pink');
  if (category === 'health') $category.classList.add('color-orange');
  if (category === 'transport') $category.classList.add('color-yellow');

  const $title = Element('span', { class: 'account-title', children: title });
  const $wallet = Element('span', { class: 'account-wallet', children: wallet });
  const $titleAndWallet = Element('div', { class: 'account-title-and-wallet', children: [$title, $wallet] });

  const value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);
  const $amount = Element('span', { class: 'account-value', children: value });
  const $status = Element('span', { class: 'account-status', children: status });
  const $valueAndStatus = Element('div', { class: 'account-value-and-status', children: [$amount, $status] });

  const $accountWrapper = Element('div', {
    class: 'account-wrapper',
    children: [$category, $titleAndWallet, $valueAndStatus],
  });
  return $accountWrapper;
};
