import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/components/Bill/styles.css');

export const Bill = ({ category, title, wallet, amount, status }) => {
  const $accountWrapper = Element('div', { class: 'account-wrapper' });

  const $category = Element('div', { class: 'account-category' });
  if (category === 'food') $category.classList.add('color-cyan');
  if (category === 'house') $category.classList.add('color-brown');
  if (category === 'education') $category.classList.add('color-pink');
  if (category === 'health') $category.classList.add('color-orange');
  if (category === 'transport') $category.classList.add('color-yellow');
  $accountWrapper.appendChild($category);

  const $titleAndWallet = Element('div', { class: 'account-title-and-wallet' });
  const $title = Element('span', { class: 'account-title', children: title });
  $titleAndWallet.appendChild($title);
  const $wallet = Element('span', { class: 'account-wallet', children: wallet });
  $titleAndWallet.appendChild($wallet);
  $accountWrapper.appendChild($titleAndWallet);

  const $valueAndStatus = Element('div', { class: 'account-value-and-status' });
  const value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);
  const $amount = Element('span', { class: 'account-value', children: value });
  $valueAndStatus.appendChild($amount);
  const $status = Element('span', { class: 'account-status', children: status });
  $valueAndStatus.appendChild($status);
  $accountWrapper.appendChild($valueAndStatus);

  return $accountWrapper;
};
