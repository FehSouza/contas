import { Element } from '../shared/Element/index.js'

export const GoalsItem = ({ title, amount }) => {
  
  const teste2 = Element('span', { children: title })
  const $test = Element('div', {class: 'teste', children: teste2})

  return $test
}


// const $goalsListWrapper = GoalsList([
//   { title: 'Reserva', amount: 200 },
//   { title: 'Poupança', amount: 18000 },
// ]);
