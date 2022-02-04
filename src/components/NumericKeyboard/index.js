import { Element } from '../shared/Element/index.js';
import { Button } from '../shared/Button/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { formatMoney } from '../../utils/currency/index.js';

importCSS('./src/components/NumericKeyboard/styles.css');

export const NumericKeyboard = () => {
  const $amount = Element('h2', { class: 'transaction-amount', children: formatMoney(0) });
  const $amountWrapper = Element('div', { class: 'transaction-amount-wrapper', children: $amount });

  const $keyboardWrapperInternal = Element('div', { class: 'numeric-keyboard-wrapper-internal' });
  const $keyboardWrapperExternal = Element('div', {
    class: 'numeric-keyboard-wrapper-external',
    children: $keyboardWrapperInternal,
  });

  const $keyboardContent = Element('div', {
    class: 'keyboard-content',
    children: [$amountWrapper, $keyboardWrapperExternal],
  });

  let value = '';
  const valueConvert = (elem) => {
    elem === $keyBackspace ? (value = value.slice(0, value.length - 1)) : (value += elem);
    const number = (Number(value) / 100).toFixed(2);

    let amount = {
      value: number,
    };
    localStorage.setItem('amount', JSON.stringify(amount));

    $amountWrapper.innerHTML = '';
    const $amount = Element('h2', { class: 'transaction-amount', children: formatMoney(number) });
    $amountWrapper.appendChild($amount);
  };

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  for (const elem of numbers) {
    const $key = Button({ class: 'numeric-keyboard-key', title: elem, onClick: () => valueConvert(elem) });
    $keyboardWrapperInternal.appendChild($key);
  }

  const $keyBackspace = Button({
    class: 'numeric-keyboard-key-backspace',
    icon: 'backspace',
    onClick: () => valueConvert($keyBackspace),
  });
  $keyboardWrapperInternal.appendChild($keyBackspace);

  return $keyboardContent;
};
