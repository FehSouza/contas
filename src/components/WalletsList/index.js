import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { InfoWallet } from '../WalletInfo/index.js';

importCSS('./src/components/WalletsList/styles.css');

export const WalletsList = (props, isModal, isButton, funcButton, animation) => {
  const $walletListWrapper = Element('div', { class: 'wallets-list-wrapper' });

  for (const item of props) {
    const $infoWallet = InfoWallet(item, isModal, isButton, () => funcButton(item.id), animation);
    $infoWallet.classList.add('wallet-list-item')
    $walletListWrapper.appendChild($infoWallet);
  }

  if (isModal) $walletListWrapper.classList.add('wallets-list-wrapper-button');

  return $walletListWrapper;
};
