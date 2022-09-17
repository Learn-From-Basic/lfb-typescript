function add(x: number, y: number) {
  return x + y;
}

function minus(x: number, y: number) {
  return x - y;
}

function multiply(x: number, y: number): number {
  return x * y;
}

function divide(x: number, y: number): number {
  return x / y;
}

console.info('=====================');
const x = 10;
const y = 2;

console.info('x', x);
console.info('y', y);

console.info('x + y');
const result = add(x, y);
console.info('Result: ', result);

console.info('x - y');
console.info('Result: ', minus(x, y));

console.info('x * y');
console.info('Result: ', multiply(x, y));

console.info('x / y');
console.info('Result: ', divide(x, y));

console.info('=====================');

/**
 * Buat fungsi penjumlahan yang bisa menerima banyak data angka (sesuai yang diinput user)
 */