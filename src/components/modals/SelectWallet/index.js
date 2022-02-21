import { Element } from '../../shared/Element/index.js';
import { importCSS } from '../../../utils/importCSS/index.js';
import { WalletsList } from '../../WalletsList/index.js';
import { InfoWallet } from '../../WalletInfo/index.js';
import { store } from '../../../store/index.js';
import { AddTransactionInfo } from '../../../pages/AddTransactionInfo/index.js';

importCSS('./src/components/modals/SelectWallet/styles.css');

export const SelectWallet = () => {
  const addWalletClick = (id) => {
    store.setWallet(id);

    console.log(id);
    $container.remove();

    const $addTransactionContent = document.querySelector('.add-transaction-content');
    $addTransactionContent.innerHTML = '';
    $addTransactionContent.appendChild(AddTransactionInfo({ walletInfo: store.getWallet() }));
  };

  const $addWallet = InfoWallet({ wallet: 'Adicione uma nova carteira' }, true);

  const $listWallets = WalletsList(store.getWallets(), true, true, addWalletClick);

  const $content = Element('div', {
    class: 'select-wallet-content',
    children: [$addWallet, $listWallets],
    onClick: (event) => event.stopPropagation(),
  });

  const $container = Element('div', {
    class: 'select-wallet-container',
    children: $content,
    onClick: (event) => event.target.remove(),
  });
  return $container;
};
