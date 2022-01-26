import { Element } from '../shared/Element/index.js';
import { Button } from '../shared/Button/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { GoalsItem } from '../GoalsItem/index.js';

importCSS('./src/components/GoalsList/styles.css');

export const GoalsList = (props) => {
  const $title = Element('span', { class: 'goals-title', children: 'Metas' });
  const $goalsListWrapper = Element('div', { class: 'goals-list-wrapper', children: $title });

  for (const item of props) {
    const $goalsItem = GoalsItem(item);
    $goalsListWrapper.appendChild($goalsItem);
  }

  const $buttonGoals = Button({ title: 'Nova Meta', class: 'goals-list-button' });
  $goalsListWrapper.appendChild($buttonGoals);

  return $goalsListWrapper;
};
