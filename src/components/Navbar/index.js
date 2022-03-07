import { createElement } from '../../utils/createElement/index.js';
import { Button } from '../shared/Button/index.js';
import { importCSS } from '../../utils/importCss/index.js';

importCSS('Navbar');

export const Navbar = ({ handleNavigationHome, handleNavigationWallets, handleNavigationAddTransaction }) => {
  const $buttonHome = Button({
    icon: 'home',
    class: ['navbar-button-home', 'navbar-button-home-select', 'active'],
    onClick: () => {
      handleNavigationHome();
      $buttonAddAccount.classList.remove('active');
      $buttonWallet.classList.remove('active');
      $buttonHome.classList.add('active');
    },
  });

  const $buttonAddAccount = Button({
    icon: 'add',
    class: 'navbar-button-add-account',
    iconProps: 'icon-add-account',
    onClick: () => {
      handleNavigationAddTransaction();
      $buttonAddAccount.classList.add('active');
      $buttonWallet.classList.remove('active');
      $buttonHome.classList.remove('active');
    },
  });
  const $buttonWallet = Button({
    icon: 'wallet',
    class: 'navbar-button-wallet',
    onClick: () => {
      handleNavigationWallets();
      $buttonAddAccount.classList.remove('active');
      $buttonWallet.classList.add('active');
      $buttonHome.classList.remove('active');
    },
  });
  const $pageNavbar = createElement('div', {
    class: 'navbar-page',
    children: [$buttonHome, $buttonAddAccount, $buttonWallet],
  });

  return $pageNavbar;
};
