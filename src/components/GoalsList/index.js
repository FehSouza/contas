import { Element } from '../shared/Element/index.js';
import { importCSS } from '../../utils/importCSS/index.js';

importCSS('./src/components/GoalsList/styles.css');

export const GoalsList = () => {
  const $teste2 = Element('span', {children: 'teste'});
  const $teste = Element('div', {children: $teste2});

  return $teste;
};

// const $goalsListWrapper = GoalsList([
//   { title: 'Reserva', amount: 200 },
//   { title: 'Poupança', amount: 18000 },
// ]);
