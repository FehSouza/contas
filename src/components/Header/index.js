import { importCSS } from '../../utils/importCSS/index.js';
importCSS('./src/components/Header/styles.css');

import { Icon } from '../shared/Icon/index.js';

export const Header = (moneyTotal) => {
  const $container = document.createElement('div');
  $container.classList.add('container-header');

  const $moneyWrapper = document.createElement('div');
  $moneyWrapper.classList.add('money-wrapper-header');

  const moneyValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(moneyTotal);

  const $moneyTotal = document.createElement('span');
  $moneyTotal.classList.add('money-total-header');
  $moneyTotal.textContent = moneyValue;

  const $icon = Icon('coin');

  $container.appendChild($moneyWrapper);
  $moneyWrapper.appendChild($moneyTotal);
  $moneyWrapper.appendChild($icon);

  return $container;
};
