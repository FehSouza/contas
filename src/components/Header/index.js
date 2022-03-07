import { formatMoney } from '../../utils/currency/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { createElement } from '../../utils/createElement/index.js';
import { Icon } from '../shared/Icon/index.js';

importCSS('Header');

export const Header = (moneyTotal) => {
  const value = formatMoney(moneyTotal);
  const $icon = Icon('coin');
  const $moneyTotal = createElement('span', { class: 'header-money-total', textContent: value });
  const $moneyWrapper = createElement('div', { class: 'header-money-wrapper', children: [$moneyTotal, $icon] });
  const $container = createElement('div', { class: 'header-container', children: $moneyWrapper });
  return $container;
};
