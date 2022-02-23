import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Icon } from '../shared/Icon/index.js';
import { formatMoney } from '../../utils/currency/index.js';
import { Button } from '../shared/Button/index.js';
import { SelectWallet } from '../modals/SelectWallet/index.js';

importCSS('./src/components/WalletInfo/styles.css');

export const InfoWallet = ({ wallet, user, amount }, isWallet, isButton, funcButton, animation) => {
  const $icon = Element('div', { class: 'wallet-icon', children: Icon('wallet', 'fa-wallet-icon') });

  const $title = Element('h3', { class: 'wallet-title' });
  if (wallet) $title.textContent = wallet;
  const $user = Element('span', { class: 'wallet-user' });
  if (user) $user.textContent = user;
  const $titleAndUser = Element('div', { class: 'wallet-title-and-user', children: [$title, $user] });

  const $walletButton = Button({
    class: 'wallet-button',
    icon: 'add',
    iconProps: 'wallet-info-button-icon',
    onClick: () => {
      const selectWallet = SelectWallet(true);
      document.body.appendChild(selectWallet);
    },
  });
  const value = formatMoney(amount);
  const $amount = Element('span', { class: 'wallet-amount', children: $walletButton });
  if (amount) $amount.textContent = value;
  if (amount === false) $amount.textContent = '';

  const $walletWrapper = Element('div', { class: 'wallet-wrapper', children: [$icon, $titleAndUser, $amount] });

  if (isWallet) $walletWrapper.classList.add(`wallet-wrapper-button`);
  if (isButton) $walletWrapper.addEventListener('click', funcButton);
  if (animation) $walletWrapper.classList.add('wallet-wrapper-animation');

  return $walletWrapper;
};
