let totalPrice = 100;

if (totalPrice < 10) {
  const isCheap = false;
  let isOk = true;
  var isGood = true;

  if (totalPrice < 5) {
    console.info('0. isCheap', isCheap);
    console.info('0. isOk', isOk);
    console.info('0. isGood', isGood);
  }
} else {
  const isCheap = true;
  let isOk = false;
  var isGood = true;
  if (totalPrice > 5) {
    console.info('1. isCheap', isCheap);
    console.info('1. isOk', isOk);
    console.info('1. isGood', isGood);
  }
}

console.info('2. totalPrice', totalPrice);
// console.info('2. isCheap', isCheap); // --> can't work
// console.info('2. isOk', isOk); // --> can't work
// console.info('2. isGood', isGood); // --> IT'S WORK

