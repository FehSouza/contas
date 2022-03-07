import { createElement } from '../../utils/createElement/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('Date');

export const Date = (setDate) => {
  const $dateTitle = createElement('h2', { class: 'date-title', textContent: 'Data' });

  const $dateWrapper = createElement('input', {
    class: 'date-wrapper',
    type: 'date',
    onChange: (event) => {
      const value = event.target.value;
      const [year, mouth, day] = value.split('-');
      const valueFormat = !!value ? `${day}/${mouth}/${year}` : value;
      setDate(valueFormat);
    },
  });

  const $dateContent = createElement('div', { class: 'date-content', children: [$dateTitle, $dateWrapper] });
  return $dateContent;
};
