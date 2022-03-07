import { createElement } from '../../utils/createElement/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { formatMoney } from '../../utils/currency/index.js';

importCSS('Bill');

const categories = {
  food: 'color-cyan',
  house: 'color-brown',
  education: 'color-pink',
  health: 'color-orange',
  transport: 'color-yellow',
};

export const Bill = ({ category, subcategory, wallet, amount, status }) => {
  const statusText = status ? 'Pago' : 'Não pago';
  const $category = createElement('div', { class: 'account-category' });
  if (category && categories[category]) $category.classList.add(categories[category]);

  const $title = createElement('span', { class: 'account-title', children: subcategory });
  const $wallet = createElement('span', { class: 'account-wallet', children: wallet });
  const $titleAndWallet = createElement('div', { class: 'account-title-and-wallet', children: [$title, $wallet] });

  const value = formatMoney(amount);
  const $amount = createElement('span', { class: 'account-value', children: value });
  const $status = createElement('span', { class: 'account-status', children: statusText });
  const $valueAndStatus = createElement('div', { class: 'account-value-and-status', children: [$amount, $status] });

  const $accountWrapper = createElement('div', {
    class: 'account-wrapper',
    children: [$category, $titleAndWallet, $valueAndStatus],
  });
  return $accountWrapper;
};
