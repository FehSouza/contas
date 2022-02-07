import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/components/Date/styles.css');

export const Date = () => {
  const $dateTitle = Element('h2', { class: 'date-title', children: 'Data' });

  const $dateWrapper = Element('input', { class: 'date-wrapper', type: 'date' });

  const $dateContent = Element('div', { class: 'date-content', children: [$dateTitle, $dateWrapper] });
  return $dateContent;
};
