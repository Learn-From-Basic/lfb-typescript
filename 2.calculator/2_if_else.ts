import './1_calculator';

export function calculate(action: 'add' | 'multiply' | 'minus' | 'divide', x: number, y: number) {
  if (action === 'add') {
    const result = add(x, y);
    console.info('add result', result);
    return result;
  } else if (action === 'minus') {
    const result = minus(x, y);
    console.info('minus result', result);
    return result;
  } else if (action === 'multiply') {
    const result = multiply(x, y);
    console.info('multiply result', result);
    return result;
  } else if (action === 'divide') {
    const result = divide(x, y);
    console.info('divide result', result);
    return result;
  } else {
    console.info('unknown action');
  }
}

export function specialCalculate() {
  
}

console.info('=====================');
// const result = calculate('add', 5, 10);
const result = calculate('minus', 5, 10);
console.info('result', result);
console.info('=====================');
