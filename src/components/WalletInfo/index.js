import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Icon } from '../shared/Icon/index.js';
import { formatMoney } from '../../utils/currency/index.js';
import { Button } from '../shared/Button/index.js';
import { SelectWallet } from '../modals/SelectWallet/index.js';

importCSS('./src/components/WalletInfo/styles.css');

export const InfoWallet = ({ wallet, user, amount }, { blueCard, isButton, funcButton, animation, funcDelete }) => {
  const $icon = Element('div', { class: 'wallet-icon', children: Icon('wallet', 'fa-wallet-icon') });

  const $title = Element('h3', { class: 'wallet-title', children: wallet });
  const $user = Element('span', { class: 'wallet-user', children: user });
  const $titleAndUser = Element('div', { class: 'wallet-title-and-user', children: [$title, $user] });

  const $walletButton = Button({
    class: 'wallet-button',
    icon: 'add',
    iconProps: 'wallet-info-button-icon',
    onClick: (event) => {
      event.stopPropagation();
      const selectWallet = SelectWallet(true);
      document.body.appendChild(selectWallet);
    },
  });
  const value = formatMoney(amount);
  const $amount = Element('span', { class: 'wallet-amount', children: $walletButton });

  const $walletWrapper = Element('div', { class: 'wallet-wrapper', children: [$icon, $titleAndUser, $amount] });
  if (amount) {
    $amount.textContent = value;
    const $deleteButton = Button({
      class: 'wallet-delete-button',
      icon: 'delete-trash',
      iconProps: 'delete-trash',
      onClick: (e) => {
        e.stopPropagation();

        funcDelete();
      },
    });
    $amount.appendChild($deleteButton);
  }
  if (amount === false) $amount.textContent = '';

  if (blueCard) $walletWrapper.classList.add(`wallet-wrapper-button`);
  if (isButton) $walletWrapper.addEventListener('click', funcButton);
  if (animation) $walletWrapper.classList.add('wallet-wrapper-animation');

  return $walletWrapper;
};
