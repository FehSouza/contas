import { importCSS } from '../../utils/importCSS/index.js';
import { Element } from '../shared/Element/index.js';
import { Icon } from '../shared/Icon/index.js';

importCSS('./src/components/Header/styles.css');

export const Header = (moneyTotal) => {
  const moneyValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(moneyTotal);
  const $icon = Icon('coin');
  const $moneyTotal = Element('span', { class: 'money-total-header', children: moneyValue });
  const $moneyWrapper = Element('div', { class: 'money-wrapper-header', children: [$moneyTotal, $icon] });
  const $container = Element('div', { class: 'container-header', children: $moneyWrapper });
  
  return $container;
};
