import { createElement } from '../../utils/createElement/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { InfoWallet } from '../WalletInfo/index.js';
import { store } from '../../store/index.js';

importCSS('WalletsList');

export const WalletsList = ({ blueCard, isButton, funcButton, animation }) => {
  const $walletListWrapper = createElement('div', { class: 'wallets-list-wrapper' });

  const updateList = () => {
    $walletListWrapper.innerHTML = '';
    addAllWallets(store.getWallets());
  };

  const deleteWallet = (id) => {
    store.deleteWallet(id);
  };

  const handleDelete = (id) => {
    deleteWallet(id);
    updateList();
  };

  const addAllWallets = (wallets) => {
    if (store.getWallets().length < 1) {
      $walletListWrapper.appendChild(
        createElement('span', {
          class: 'text-without-wallet',
          textContent: 'Não há nenhuma carteira adicionada.',
        })
      );
    }
    for (const item of wallets) {
      const $infoWallet = InfoWallet(item, {
        blueCard,
        isButton,
        funcButton: () => funcButton(item.id),
        animation,
        funcDelete: () => handleDelete(item.id),
      });
      $infoWallet.classList.add('wallet-list-item');
      $walletListWrapper.appendChild($infoWallet);
    }
  };

  addAllWallets(store.getWallets());

  if (blueCard) {
    $walletListWrapper.classList.remove('wallets-list-wrapper');
    $walletListWrapper.classList.add('wallets-list-wrapper-button');
  }

  return $walletListWrapper;
};
