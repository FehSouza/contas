import { Header } from '../../components/Header/index.js';
import { AccountsDay } from '../../components/AccountsDay/index.js';
import { Element } from '../../components/shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/pages/Home/styles.css');

const ALL_BILLS_MOCK = [
  {
    date: '13/01/2022',
    bills: [
      { category: 'food', title: 'Almoço', wallet: 'NuBank', amount: 150, status: 'pago' },
      { category: 'education', title: 'Escola', wallet: 'Carteira', amount: 1050, status: 'não pago' },
    ],
  },
  {
    date: '12/01/2022',
    bills: [
      { category: 'house', title: 'Faxina', wallet: 'NuBank', amount: 750, status: 'pago' },
      { category: 'education', title: 'Faculdade', wallet: 'Santander', amount: 1599, status: 'não pago' },
      { category: 'transport', title: 'Uber', wallet: 'Carteira', amount: 15, status: 'pago' },
      { category: 'food', title: 'Almoço', wallet: 'NuBank', amount: 150, status: 'pago' },
    ],
  },
  {
    date: '11/01/2022',
    bills: [
      { category: 'food', title: 'Almoço', wallet: 'NuBank', amount: 150, status: 'pago' },
      { category: 'transport', title: 'Passagem', wallet: 'Santander', amount: 5, status: 'pago' },
      { category: 'education', title: 'Escola', wallet: 'Carteira', amount: 1050, status: 'não pago' },
    ],
  },
];

export const Home = () => {
  const $header = Header(100000);
  const $accountsDay = ALL_BILLS_MOCK.map((item) => AccountsDay(item));

  const $containerAccountsPerDay = Element('div', {
    class: 'accounts-per-day-container',
    children: $accountsDay,
  });
  const $pageHome = Element('div', { class: 'home-page', children: [$header, $containerAccountsPerDay] });
  return $pageHome;
};
