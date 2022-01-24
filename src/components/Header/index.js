import { formatMoney } from '../../utils/currency/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Element } from '../shared/Element/index.js';
import { Icon } from '../shared/Icon/index.js';

importCSS('./src/components/Header/styles.css');

export const Header = (moneyTotal) => {
  const value = formatMoney(moneyTotal);
  const $icon = Icon('coin');
  const $moneyTotal = Element('span', { class: 'header-money-total', children: value });
  const $moneyWrapper = Element('div', { class: 'header-money-wrapper', children: [$moneyTotal, $icon] });
  const $container = Element('div', { class: 'header-container', children: $moneyWrapper });
  return $container;
};
