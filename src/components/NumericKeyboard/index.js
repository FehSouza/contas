import { Element } from '../shared/Element/index.js';
import { Button } from '../shared/Button/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/components/NumericKeyboard/styles.css');

export const NumericKeyboard = () => {
  const $keyboardWrapperInternal = Element('div', { class: 'numeric-keyboard-wrapper-internal' });
  const $keyboardWrapperExternal = Element('div', {
    class: 'numeric-keyboard-wrapper-external',
    children: $keyboardWrapperInternal,
  });

  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

  for (const elem of numbers) {
    const $key = Button({ class: 'numeric-keyboard-key', title: elem });
    $keyboardWrapperInternal.appendChild($key);
  }

  const $keyBackspace = Button({ class: 'numeric-keyboard-key-backspace', icon: 'backspace' });
  $keyboardWrapperInternal.appendChild($keyBackspace);

  return $keyboardWrapperExternal;
};
