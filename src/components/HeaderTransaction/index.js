import { Element } from '../shared/Element/index.js';
import { Button } from '../shared/Button/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/components/HeaderTransaction/styles.css');

export const HeaderTransaction = () => {
  const $recipeButton = Button({ title: 'Receita', class: 'header-transaction-button' });
  const $expenseButton = Button({ title: 'Despesa', class: ['header-transaction-button', 'button-on'] });
  const $transferButton = Button({ title: 'Transferência', class: ['header-transaction-button', 'transfer-button'] });

  const toggleButton = (button) => {
    $recipeButton.classList.remove('button-on');
    $expenseButton.classList.remove('button-on');
    $transferButton.classList.remove('button-on');
    button.classList.add('button-on');
  };

  $recipeButton.addEventListener('click', () => toggleButton($recipeButton));
  $expenseButton.addEventListener('click', () => toggleButton($expenseButton));
  $transferButton.addEventListener('click', () => toggleButton($transferButton));

  const $headerTransactionWrapper = Element('div', {
    class: 'header-transaction-wrapper',
    children: [$recipeButton, $expenseButton, $transferButton],
  });

  return $headerTransactionWrapper;
};
