import { Element } from '../shared/Element/index.js';
import { Button } from '../shared/Button/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { store } from '../../store/index.js';
import { TransactionValue } from '../TransactionValue/index.js';

importCSS('./src/components/NumericKeyboard/styles.css');

export const NumericKeyboard = () => {
  const $transactionValue = TransactionValue();
  const $keyboardWrapperInt = Element('div', { class: 'numeric-keyboard-wrapper-int' });
  const $keyboardWrapperExt = Element('div', { class: 'numeric-keyboard-wrapper-ext', children: $keyboardWrapperInt });

  let value = '';
  const valueConvert = (elem) => {
    elem === $keyBackspace ? (value = value.slice(0, value.length - 1)) : (value += elem);
    const number = (Number(value) / 100).toFixed(2);
    store.setTransactionAmount(number);
    $transactionValue.innerHTML = '';
    $transactionValue.appendChild(TransactionValue());
  };

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  for (const elem of numbers) {
    const $key = Button({ class: 'numeric-keyboard-key', title: elem, onClick: () => valueConvert(elem) });
    $keyboardWrapperInt.appendChild($key);
  }

  const $keyBackspace = Button({
    class: 'numeric-keyboard-key-backspace',
    icon: 'backspace',
    onClick: () => valueConvert($keyBackspace),
  });
  $keyboardWrapperInt.appendChild($keyBackspace);

  const $keyboardContent = Element('div', {
    class: 'keyboard-content',
    children: [$transactionValue, $keyboardWrapperExt],
  });

  return $keyboardContent;
};
