import { Element } from '../shared/Element/index.js';
import { Button } from '../shared/Button/index.js';
import { importCSS } from '../../utils/importCss/index.js';

importCSS('./src/components/Navbar/styles.css');

export const Navbar = (onClickHome, onClickWallet, onClickAdd) => {
  const $buttonHome = Button({ icon: 'home', class: 'navbar-button-home', onClick: onClickHome });
  const $buttonAddAccount = Button({ icon: 'add', class: 'navbar-button-add-account', onClick: onClickAdd });
  const $buttonWallet = Button({ icon: 'wallet', class: 'navbar-button-wallet', onClick: onClickWallet });
  const $pageNavbar = Element('div', {
    class: 'navbar-page',
    children: [$buttonHome, $buttonAddAccount, $buttonWallet],
  });

  return $pageNavbar;
};
