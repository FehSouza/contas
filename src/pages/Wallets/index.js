import { Element } from '../../components/shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Header } from '../../components/Header/index.js';
import { WalletsList } from '../../components/WalletsList/index.js';
import { GoalsList } from '../../components/GoalsList/index.js';

importCSS('./src/pages/Wallets/styles.css');

const WALLETS_MOCK = [
  { title: 'NuBank', user: 'Raul', amount: 10000 },
  { title: 'Santander', user: 'Fernanda', amount: 4500 },
  { title: 'Carteira', user: 'Raul', amount: 150 },
  { title: 'Itau', user: 'Fernanda', amount: 0.8 },
];

const GOALS_MOCK = [
  { title: 'Reserva', amount: 200 },
  { title: 'Poupança', amount: 18000 },
];

export const Wallets = () => {
  const $header = Header(100000);
  const $walletsListWrapper = WalletsList(WALLETS_MOCK);
  const $goalsListWrapper = GoalsList(GOALS_MOCK);

  const $walletContent = Element('div', {
    class: 'wallet-content',
    children: [$walletsListWrapper, $goalsListWrapper],
  });
  const $walletContainer = Element('div', {
    class: 'wallet-container',
    children: $walletContent,
  });
  const $walletPage = Element('div', { class: 'wallets-page', children: [$header, $walletContainer] });
  return $walletPage;
};
