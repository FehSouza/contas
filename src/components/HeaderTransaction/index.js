import { Element } from '../shared/Element/index.js';
import { Button } from '../shared/Button/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { store } from '../../store/index.js';

importCSS('./src/components/HeaderTransaction/styles.css');

export const HeaderTransaction = (updateValue) => {
  const $recipeButton = Button({ title: 'Receita', class: 'header-transaction-button' });
  const $expenseButton = Button({ title: 'Despesa', class: ['header-transaction-button'] });
  const $transferButton = Button({ title: 'Transferência', class: ['header-transaction-button', 'transfer-button'] });

  const updateTab = (tab) => {
    if (tab === 'recipe') $recipeButton.classList.add('button-on');
    if (tab === 'expense') $expenseButton.classList.add('button-on');
    if (tab === 'transfer') $transferButton.classList.add('button-on');
  };
  updateTab(store.getTypeTransaction());

  const handleCategory = (button, typeTransaction) => {
    $recipeButton.classList.remove('button-on');
    $expenseButton.classList.remove('button-on');
    $transferButton.classList.remove('button-on');
    button.classList.add('button-on');
    store.setTypeTransaction(typeTransaction);
    updateValue();
  };

  const $headerTransactionWrapper = Element('div', {
    class: 'header-transaction-content',
    children: [$recipeButton, $expenseButton, $transferButton],
  });

  $recipeButton.addEventListener('click', () => handleCategory($recipeButton, 'recipe'));
  $expenseButton.addEventListener('click', () => handleCategory($expenseButton, 'expense'));
  $transferButton.addEventListener('click', () => handleCategory($transferButton, 'transfer'));

  return $headerTransactionWrapper;
};
