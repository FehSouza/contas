import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/components/Date/styles.css');

export const Date = (setDate) => {
  const $dateTitle = Element('h2', { class: 'date-title', children: 'Data' });

  const $dateWrapper = Element('input', {
    class: 'date-wrapper',
    type: 'date',
    onChange: (event) => {
      const value = event.target.value;
      $dateWrapper.value;
      setDate(value);
    },
  });

  const $dateContent = Element('div', { class: 'date-content', children: [$dateTitle, $dateWrapper] });
  return $dateContent;
};
