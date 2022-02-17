import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { formatMoney } from '../../utils/currency/index.js';

importCSS('./src/components/Bill/styles.css');

const categories = {
  food: 'color-cyan',
  house: 'color-brown',
  education: 'color-pink',
  health: 'color-orange',
  transport: 'color-yellow',
};

export const Bill = ({ category, subcategory, wallet, amount, status }) => {
  const statusText = status ? 'Pago' : 'Não pago';
  const $category = Element('div', { class: 'account-category' });
  if (category && categories[category]) $category.classList.add(categories[category]);

  const $title = Element('span', { class: 'account-title', children: subcategory });
  const $wallet = Element('span', { class: 'account-wallet', children: wallet });
  const $titleAndWallet = Element('div', { class: 'account-title-and-wallet', children: [$title, $wallet] });

  const value = formatMoney(amount);
  const $amount = Element('span', { class: 'account-value', children: value });
  const $status = Element('span', { class: 'account-status', children: statusText });
  const $valueAndStatus = Element('div', { class: 'account-value-and-status', children: [$amount, $status] });

  const $accountWrapper = Element('div', {
    class: 'account-wrapper',
    children: [$category, $titleAndWallet, $valueAndStatus],
  });
  return $accountWrapper;
};
