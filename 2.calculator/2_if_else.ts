import './1_calculator';

export function calculate(action: 'add' | 'multiply' | 'minus' | 'divide', x, y) {
  if (action === 'add') {
    const result = add(x, y);
    console.info('add result', result);
  } else if (action === 'minus') {
    const result = minus(x, y);
    console.info('minus result', result);
  } else if (action === 'multiply') {
    const result = multiply(x, y);
    console.info('multiply result', result);
  } else if (action === 'divide') {
    const result = divide(x, y);
    console.info('divide result', result);
  } else {
    console.info('unknown action');
  }
}

console.info('=====================');
const result = calculate('add', 5, 10);
console.info('result', result);
console.info('=====================');
