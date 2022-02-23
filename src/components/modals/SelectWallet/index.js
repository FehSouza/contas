import { Element } from '../../shared/Element/index.js';
import { Button } from '../../shared/Button/index.js';
import { importCSS } from '../../../utils/importCSS/index.js';
import { WalletsList } from '../../WalletsList/index.js';
import { InfoWallet } from '../../WalletInfo/index.js';
import { AddTransactionInfo } from '../../../pages/AddTransactionInfo/index.js';
import { store } from '../../../store/index.js';

importCSS('./src/components/modals/SelectWallet/styles.css');

export const SelectWallet = (add) => {
  const addWalletClick = (id) => {
    store.setWallet(id);
    $container.remove();
    const $addTransactionContent = document.querySelector('.add-transaction-content');
    $addTransactionContent.innerHTML = '';
    $addTransactionContent.appendChild(AddTransactionInfo({ walletInfo: store.getWallet() }));
    store.setAddWalletStatus(false);
  };

  const addNewWallet = () => {
    if (store.getAddWalletStatus()) {
      $addWalletWrapper.removeChild($addNewWallet);
      store.setAddWalletStatus(false);
    } else {
      $addWalletWrapper.appendChild($addNewWallet);
      store.setAddWalletStatus(true);
    }
  };

  const $title = Element('span', { class: 'add-new-wallet-title', children: 'Nome da carteira:' });
  const $titleInput = Element('input', { class: 'add-new-wallet-input', type: 'text' });
  const $titleWrapper = Element('div', { class: 'add-new-wallet-wrapper', children: [$title, $titleInput] });

  const $user = Element('span', { class: 'add-new-wallet-title', children: 'Nome do usuário:' });
  const $userInput = Element('input', { class: 'add-new-wallet-input', type: 'text' });
  const $userWrapper = Element('div', { class: 'add-new-wallet-wrapper', children: [$user, $userInput] });

  const $amount = Element('span', { class: 'add-new-wallet-title', children: 'Valor inicial:' });
  const $amountInput = Element('input', { class: 'add-new-wallet-input', type: 'number' });
  const $amountWrapper = Element('div', { class: 'add-new-wallet-wrapper', children: [$amount, $amountInput] });

  let $listWallets = WalletsList(store.getWallets(), true, true, addWalletClick, true);

  const $buttonAddWallet = Button({
    title: 'Criar carteira',
    class: 'add-new-wallet-button',
    onClick: () => {
      if ($titleInput.value && $userInput.value && $amountInput.value) {
        store.addWallet({
          wallet: $titleInput.value,
          user: $userInput.value,
          amount: Number($amountInput.value),
          id: Math.random().toString(36).slice(2, 11),
        });
        $addWalletWrapper.removeChild($addNewWallet);
        store.setAddWalletStatus(false);
        $listWallets.remove();
        $listWallets = WalletsList(store.getWallets(), true, true, addWalletClick, true);
        $content.appendChild($listWallets);
        $titleInput.value = '';
        $userInput.value = '';
        $amountInput.value = '';
      }
    },
  });

  const $addWallet = InfoWallet({ wallet: 'Adicione uma nova carteira', amount: false }, true, true, addNewWallet);
  const $addNewWallet = Element('div', {
    class: 'add-new-wallet-content',
    children: [$titleWrapper, $userWrapper, $amountWrapper, $buttonAddWallet],
  });

  const $addWalletWrapper = Element('div', { class: 'add-wallet-wrapper', children: $addWallet });

  if (add) {
    $addWalletWrapper.appendChild($addNewWallet);
    store.setAddWalletStatus(true);
  }

  const $content = Element('div', {
    class: 'select-wallet-content',
    children: [$addWalletWrapper],
    onClick: (event) => event.stopPropagation(),
  });

  if (store.getWallets().length) $content.appendChild($listWallets);

  const $container = Element('div', {
    class: 'select-wallet-container',
    children: $content,
    onClick: (event) => {
      event.target.remove(), store.setAddWalletStatus(false);
    },
  });
  return $container;
};
