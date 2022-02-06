import { Element } from '../shared/Element/index.js';
import { Button } from '../shared/Button/index.js';
import { importCSS } from '../../utils/importCss/index.js';

importCSS('./src/components/Navbar/styles.css');

export const Navbar = ({ handleNavigationHome, handleNavigationWallets, handleNavigationAddTransaction }) => {
  const $buttonHome = Button({ icon: 'home', class: 'navbar-button-home', onClick: handleNavigationHome });
  const $buttonAddAccount = Button({
    icon: 'add',
    class: 'navbar-button-add-account',
    iconProps: 'icon-add-account',
    onClick: handleNavigationAddTransaction,
  });
  const $buttonWallet = Button({ icon: 'wallet', class: 'navbar-button-wallet', onClick: handleNavigationWallets });
  const $pageNavbar = Element('div', {
    class: 'navbar-page',
    children: [$buttonHome, $buttonAddAccount, $buttonWallet],
  });

  return $pageNavbar;
};
