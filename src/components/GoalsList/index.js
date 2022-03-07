import { createElement } from '../../utils/createElement/index.js';
import { Button } from '../shared/Button/index.js';
import { importCSS } from '../../utils/importCSS/index.js';
import { GoalsItem } from '../GoalsItem/index.js';

importCSS('GoalsList');

export const GoalsList = (props) => {
  const $title = createElement('span', { class: 'goals-title', textContent: 'Metas' });
  const $goalsListWrapper = createElement('div', { class: 'goals-list-wrapper', children: $title });

  for (const item of props) {
    const $goalsItem = GoalsItem(item);
    $goalsListWrapper.appendChild($goalsItem);
  }

  const $buttonGoals = Button({ title: 'Nova Meta', class: 'goals-list-button' });
  $goalsListWrapper.appendChild($buttonGoals);

  return $goalsListWrapper;
};
