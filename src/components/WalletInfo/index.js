import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Icon } from '../shared/Icon/index.js';
import { formatMoney } from '../../utils/currency/index.js';
import { Button } from '../shared/Button/index.js';

importCSS('./src/components/WalletInfo/styles.css');

export const InfoWallet = ({ title, user, amount, classes }) => {
  const $icon = Element('div', { class: 'wallet-icon', children: Icon('wallet', 'fa-wallet-icon') });

  const $title = Element('h3', { class: 'wallet-title', children: 'Selecione a Carteira' });
  if (title) $title.textContent = title;
  const $user = Element('span', { class: 'wallet-user' });
  if (user) $user.textContent = user;
  const $titleAndUser = Element('div', { class: 'wallet-title-and-user', children: [$title, $user] });

  const $walletButton = Button({ class: 'wallet-button', icon: 'add', iconProps: 'wallet-info-button-icon' });
  const value = formatMoney(amount);
  const $amount = Element('span', { class: 'wallet-amount', children: $walletButton });
  if (amount) $amount.textContent = value;

  const $walletWrapper = Element('div', { class: 'wallet-wrapper', children: [$icon, $titleAndUser, $amount] });
  if (classes) $walletWrapper.classList.add(`wallet-wrapper-button`);
  return $walletWrapper;
};
