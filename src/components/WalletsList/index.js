import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { InfoWallet } from '../WalletInfo/index.js';

importCSS('./src/components/WalletsList/styles.css');

export const WalletsList = (props) => {
  const $walletListWrapper = Element('div', { class: 'wallets-list-wrapper' });

  for (const item of props) {
    const $infoWallet = InfoWallet(item);
    $walletListWrapper.appendChild($infoWallet);
  }

  return $walletListWrapper;
};
