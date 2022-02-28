import { Element } from '../../components/shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Header } from '../../components/Header/index.js';
import { WalletsList } from '../../components/WalletsList/index.js';
import { GoalsList } from '../../components/GoalsList/index.js';
import { store } from '../../store/index.js';
import { Button } from '../../components/shared/Button/index.js';
import { AddWallet } from '../../components/modals/AddWallet/index.js';

importCSS('./src/pages/Wallets/styles.css');

const GOALS_MOCK = [
  { title: 'Reserva', amount: 200 },
  { title: 'Poupança', amount: 18000 },
];

export const Wallets = () => {
  const $header = Header(100000);

  const $titleWallets = Element('span', { class: 'wallets-title', children: 'Carteiras' });
  const $walletsListWrapper = WalletsList(store.getWallets());
  const $addWalletButton = Button({
    title: 'Nova carteira',
    class: 'add-wallet-button',
    onClick: () => {
      const addWallet = AddWallet();
      document.body.appendChild(addWallet);
    },
  });
  const $walletsWrapper = Element('div', {
    class: 'wallets-wrapper-page',
    children: [$walletsListWrapper, $addWalletButton],
  });
  const $walletsContent = Element('div', {
    class: 'wallets-content-page',
    children: [$titleWallets, $walletsWrapper],
  });
  $walletsListWrapper.classList.add('wallets-list-wrapper-page');

  if (store.getWallets().length < 1) {
    $walletsListWrapper.textContent = 'Não há nenhuma carteira adicionada.';
  }

  const $goalsListWrapper = GoalsList(GOALS_MOCK);

  const $walletContent = Element('div', {
    class: 'wallet-content',
    children: [$walletsContent, $goalsListWrapper],
  });
  const $walletContainer = Element('div', {
    class: 'wallet-container',
    children: $walletContent,
  });
  const $walletPage = Element('div', { class: 'wallets-page', children: [$header, $walletContainer] });
  return $walletPage;
};
