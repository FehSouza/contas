import { Element } from '../shared/Element/index.js';
import { Icon } from '../shared/Icon/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { formatMoney } from '../../utils/currency/index.js';

importCSS('./src/components/GoalsItem/styles.css');

export const GoalsItem = ({ title, amount }) => {
  const $icon = Element('div', { class: 'goals-item-icon', children: Icon('wallet', 'fa-wallet-icon-goals') });

  const $title = Element('h3', { class: 'goals-item-title', children: title });
  const $statusInternal = Element('div', { class: 'goals-item-status-internal' });
  const $statusExternal = Element('div', { class: 'goals-item-status-external', children: $statusInternal });
  const $titleAndStatus = Element('div', { class: 'goals-item-title-and-status', children: [$title, $statusExternal] });

  const value = formatMoney(amount);
  const $amount = Element('span', { class: 'goals-item-amount', children: value });

  const $goalsItemWrapper = Element('div', {
    class: 'goals-item-wrapper',
    children: [$icon, $titleAndStatus, $amount],
  });
  return $goalsItemWrapper;
};
