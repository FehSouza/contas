import { importCSS } from '../../utils/importCSS/index.js';
import { Element } from '../shared/Element/index.js';
import { Icon } from '../shared/Icon/index.js';

importCSS('./src/components/Header/styles.css');

export const Header = (moneyTotal) => {
  const $container = Element('div', 'container-header');
  const $moneyWrapper = Element('div', 'money-wrapper-header');
  const moneyValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(moneyTotal);
  const $moneyTotal = Element('span', 'money-total-header', undefined, undefined, moneyValue);
  const $icon = Icon('coin');

  $container.appendChild($moneyWrapper);
  $moneyWrapper.appendChild($moneyTotal);
  $moneyWrapper.appendChild($icon);

  return $container;
};
