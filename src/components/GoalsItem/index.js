import { createElement } from '../../utils/createElement/index.js';
import { Icon } from '../shared/Icon/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { formatMoney } from '../../utils/currency/index.js';

importCSS('GoalsItem');

export const GoalsItem = ({ title, amount }) => {
  const $icon = createElement('div', { class: 'goals-item-icon', children: Icon('wallet', 'fa-wallet-icon-goals') });

  const $title = createElement('h3', { class: 'goals-item-title', children: title });
  const $statusInternal = createElement('div', { class: 'goals-item-status-internal' });
  const $statusExternal = createElement('div', { class: 'goals-item-status-external', children: $statusInternal });
  const $titleAndStatus = createElement('div', {
    class: 'goals-item-title-and-status',
    children: [$title, $statusExternal],
  });

  const value = formatMoney(amount);
  const $amount = createElement('span', { class: 'goals-item-amount', textContent: value });

  const $goalsItemWrapper = createElement('div', {
    class: 'goals-item-wrapper',
    children: [$icon, $titleAndStatus, $amount],
  });
  return $goalsItemWrapper;
};
