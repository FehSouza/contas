import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Button } from '../shared/Button/index.js';
import { Icon } from '../shared/Icon/index.js';
import { store } from '../../store/index.js';

importCSS('./src/components/Installment/styles.css');

export const Installment = () => {
  const $title = Element('h2', { class: 'installment-title', children: 'Parcelas' });

  const $value = Element('input', {
    class: 'installment-value',
    placeholder: 'Parcela',
    type: 'number',
    disabled: true,
  });

  const $checkBox = Button({ class: 'installment-check-box', onClick: () => toggleButton() });

  const $icon = Icon('check');
  let disabled = true;
  const toggleButton = () => {
    if (disabled) {
      $checkBox.appendChild($icon);
      $value.disabled = false;
      disabled = false;
    } else {
      $checkBox.removeChild($icon);
      $value.disabled = true;
      $value.value = '';
      disabled = true;
    }
  };

  const $checkText = Element('span', { class: 'installment-check-text', children: 'Dividir valor' });
  const $checkWrapper = Element('div', { class: 'installment-check-wrapper', children: [$checkBox, $checkText] });
  const $installmentWrapper = Element('div', { class: 'installment-wrapper', children: [$value, $checkWrapper] });

  const $installmentContent = Element('div', {
    class: 'installment-content',
    children: [$title, $installmentWrapper],
  });
  return $installmentContent;
};
