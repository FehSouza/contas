import { Element } from '../shared/Element/index.js';
import { Button } from '../shared/Button/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/components/HeaderTransaction/styles.css');

const $recipeButton = Button({
  title: 'Receita',
  class: ['header-transaction-button', 'header-transaction-recipe-button'],
});
const $expenseButton = Button({ title: 'Despesa', class: 'header-transaction-button' });
const $transferButton = Button({ title: 'Transferência', class: ['header-transaction-button', 'transfer-button'] });

export const HeaderTransaction = () => {
  $recipeButton.addEventListener('click', () => {
    $recipeButton.classList.add('header-transaction-recipe-button');
    $expenseButton.classList.remove('header-transaction-expense-button');
    $transferButton.classList.remove('header-transaction-transfer-button');
  });

  $expenseButton.addEventListener('click', () => {
    $recipeButton.classList.remove('header-transaction-recipe-button');
    $expenseButton.classList.add('header-transaction-expense-button');
    $transferButton.classList.remove('header-transaction-transfer-button');
  });

  $transferButton.addEventListener('click', () => {
    $recipeButton.classList.remove('header-transaction-recipe-button');
    $expenseButton.classList.remove('header-transaction-expense-button');
    $transferButton.classList.add('header-transaction-transfer-button');
  });

  const $headerTransactionWrapper = Element('div', {
    class: 'header-transaction-wrapper',
    children: [$recipeButton, $expenseButton, $transferButton],
  });

  return $headerTransactionWrapper;
};
