import { Header } from '../../components/Header/index.js';
import { AccountsDay } from '../../components/AccountsDay/index.js';
import { createElement } from '../../utils/createElement/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { store } from '../../store/index.js';

importCSS('pages/Home');

export const Home = () => {
  const $header = Header(store.getAmountTotal());

  const $containerAccountsPerDay = createElement('div', { class: 'accounts-per-day-container' });

  if (store.getBills().length) {
    const $accountsDay = store.getBills().map((item) => AccountsDay(item));
    $accountsDay.forEach((elem) => $containerAccountsPerDay.appendChild(elem));
  } else {
    $containerAccountsPerDay.textContent = 'Não há nenhuma transação adicionada.';
    $containerAccountsPerDay.classList.add('accounts-per-day-container-without-transaction');
  }

  const $pageHome = createElement('div', { class: 'home-page', children: [$header, $containerAccountsPerDay] });
  return $pageHome;
};
