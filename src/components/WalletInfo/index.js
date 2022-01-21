import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Icon } from '../shared/Icon/index.js';

importCSS('./src/components/WalletInfo/styles.css');

export const InfoWallet = ({ title, user, amount }) => {
  const $icon = Element('div', { class: 'wallet-icon', children: Icon('wallet', 'fa-wallet-icon') });

  const $title = Element('h3', { class: 'wallet-title', children: title });
  const $user = Element('span', { class: 'wallet-user', children: user });
  const $titleAndUser = Element('div', { class: 'wallet-title-and-user', children: [$title, $user] });

  const value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(amount);
  const $amount = Element('span', { class: 'wallet-amount', children: value });

  const $walletWrapper = Element('div', { class: 'wallet-wrapper', children: [$icon, $titleAndUser, $amount] });

  return $walletWrapper;
};
