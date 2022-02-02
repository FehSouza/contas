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

export const HeaderTransaction = (amount) => {
  const $recipeButton = Button({ title: 'Receita', class: 'header-transaction-button' });
  const $expenseButton = Button({ title: 'Despesa', class: ['header-transaction-button', 'button-on'] });
  const $transferButton = Button({ title: 'Transferência', class: ['header-transaction-button', 'transfer-button'] });

  const handleCategory = ({ button, type }) => {
    $recipeButton.classList.remove('button-on');
    $expenseButton.classList.remove('button-on');
    $transferButton.classList.remove('button-on');
    button.classList.add('button-on');
    $amount.classList.remove(categories.recipe, categories.expense, categories.transfer);
    $amount.classList.add(categories[type]);
  };

  const $buttonsWrapper = Element('div', {
    class: 'header-transaction-buttons-wrapper',
    children: [$recipeButton, $expenseButton, $transferButton],
  });

  const $amount = Element('h2', { class: 'header-transaction-amount', children: formatMoney(amount) });

  const $amountWrapper = Element('div', { class: 'header-transaction-amount-wrapper', children: $amount });

  const $headerTransactionWrapper = Element('div', { class: 'header-transaction-content', children: [$buttonsWrapper, $amountWrapper] });

  $recipeButton.addEventListener('click', () => handleCategory({ button: $recipeButton, type: 'recipe' }));
  $expenseButton.addEventListener('click', () => handleCategory({ button: $expenseButton, type: 'expense' }));
  $transferButton.addEventListener('click', () => handleCategory({ button: $transferButton, type: 'transfer' }));

  return $headerTransactionWrapper;
};
