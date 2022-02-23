import { Element } from '../../shared/Element/index.js';
import { importCSS } from '../../../utils/importCSS/index.js';

importCSS('./src/components/modals/AddWallet/styles.css');

export const AddWallet = () => {
  const $container = Element('div', {
    class: 'add-wallet-container',
    children: 'teste',
    onClick: (e) => {
      e.stopPropagation();
    },
  });

  const $modal = Element('div', {
    class: 'add-wallet-modal',
    children: $container,
    onClick: (e) => {
      e.target.remove();
    },
  });
  return $modal;
};
