import { createElement } from '../../utils/createElement/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { Button } from '../shared/Button/index.js';
import { Icon } from '../shared/Icon/index.js';

importCSS('Installment');

export const Installment = () => {
  const $title = createElement('h2', { class: 'installment-title', textContent: 'Parcelas' });

  const $value = createElement('input', {
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

  const $checkText = createElement('span', { class: 'installment-check-text', textContent: 'Dividir valor' });
  const $checkWrapper = createElement('div', { class: 'installment-check-wrapper', children: [$checkBox, $checkText] });
  const $installmentWrapper = createElement('div', { class: 'installment-wrapper', children: [$value, $checkWrapper] });

  const $installmentContent = createElement('div', {
    class: 'installment-content',
    children: [$title, $installmentWrapper],
  });
  return $installmentContent;
};
