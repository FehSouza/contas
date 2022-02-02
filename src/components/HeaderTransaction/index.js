import { Element } from '../shared/Element/index.js';
import { Button } from '../shared/Button/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { formatMoney } from '../../utils/currency/index.js';

importCSS('./src/components/HeaderTransaction/styles.css');

const categories = {
  recipe: 'header-transaction-amount-recipe',
  expense: 'header-transaction-amount-expense',
  transfer: 'header-transaction-amount-transfer',
};

export const HeaderTransaction = () => {
  const $recipeButton = Button({ title: 'Receita', class: 'header-transaction-button' });
  const $expenseButton = Button({ title: 'Despesa', class: ['header-transaction-button', 'button-on'] });
  const $transferButton = Button({ title: 'Transferência', class: ['header-transaction-button', 'transfer-button'] });

  const handleCategory = (button) => {
    $recipeButton.classList.remove('button-on');
    $expenseButton.classList.remove('button-on');
    $transferButton.classList.remove('button-on');
    button.classList.add('button-on');
  };

  const $headerTransactionWrapper = Element('div', {
    class: 'header-transaction-content',
    children: [$recipeButton, $expenseButton, $transferButton],
  });

  $recipeButton.addEventListener('click', () => handleCategory($recipeButton));
  $expenseButton.addEventListener('click', () => handleCategory($expenseButton));
  $transferButton.addEventListener('click', () => handleCategory($transferButton));

  return $headerTransactionWrapper;
};
