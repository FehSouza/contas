import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/components/AccountAdd/styles.css');

export const AccountAdd = (properties) => {
  const $accountWrapper = Element('div', { class: 'account-wrapper' });

  for (const key in properties) {
    if (key === 'category') {
      const $categoryColor = Element('div', { class: 'account-category-color' });
      if (properties[key] === 'food') $categoryColor.classList.add('color-cyan');
      if (properties[key] === 'house') $categoryColor.classList.add('color-brown');
      if (properties[key] === 'education') $categoryColor.classList.add('color-pink');
      if (properties[key] === 'health') $categoryColor.classList.add('color-orange');
      if (properties[key] === 'transport') $categoryColor.classList.add('color-yellow');
      $accountWrapper.appendChild($categoryColor);
    }

    const $categoryAndWallet = Element('div', { class: 'account-category-and-wallet' });

    if (key === 'typeCategory') {
      const $category = Element('span', { class: 'account-category', children: properties[key] });
      $categoryAndWallet.appendChild($category);
    }

    if (key === 'wallet') {
      const $wallet = Element('span', { class: 'account-wallet', children: properties[key] });
      $categoryAndWallet.appendChild($wallet);
    }

    $accountWrapper.appendChild($categoryAndWallet);
    
    const $valueAndStatus = Element('div', { class: 'account-value-and-status' });
    
    if (key === 'moneyValue') {
      const value = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(properties[key]);
      const $value = Element('span', { class: 'account-value', children: value });
      $valueAndStatus.appendChild($value);
    }
    
    if (key === 'status') {
      const $status = Element('span', { class: 'account-status', children: properties[key] });
      $valueAndStatus.appendChild($status);
    }

    $accountWrapper.appendChild($valueAndStatus);
  }

  return $accountWrapper;
};
