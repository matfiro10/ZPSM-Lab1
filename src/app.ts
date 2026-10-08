import { Calculator } from './calculator.ts';
import { sum_with_for } from './sum_with_for.ts';
import { sum_with_guards } from './sum_with_guards.ts';
import { sum_with_reduce } from './sum_with_reduce.ts';

const course: string = 'ZPSM';
const year: number = 2026;

console.log(`${course} ${year} - environment is up`);

console.log(`Test: sum using for loop\n`);
console.log(sum_with_for(1, 2, 3, 4, 5));   // 15
console.log(sum_with_for(2, 4, 6));         // 12
console.log(sum_with_for());                // 0

console.log(`\n`);

console.log(`Test: sum using reduce\n`);
console.log(sum_with_reduce(1, 2, 3, 4, 5));     // 15
console.log(sum_with_reduce(2, 4, 6));           // 12
console.log(sum_with_reduce());                  // 0

console.log(`\n`);

console.log(`Test: sum with type guards\n`);
console.log(`Total sum: ${sum_with_guards(5, "5")}\n`);                             // 5
console.log(`Total sum: ${sum_with_guards(1, NaN, 2)}\n`);                          // 3
console.log(`Total sum: ${sum_with_guards(1, 2, 'text', 4, 'string', 10)}\n`);      // 17
console.log(`Total sum: ${sum_with_guards(2, {}, 6)}\n`);                           // 8
console.log(`Total sum: ${sum_with_guards(5, Object, () => {}, 10)}\n`);            // 15
console.log(`Total sum: ${sum_with_guards(null, undefined)}\n`);                    // 0

console.log(`\n`);

console.log(`Test: calculator class\n`);

let calc = new Calculator([Infinity, "6", 3, 0, 5]);

console.log(`Sum: ${calc.add()}`);                  // 8
console.log(`Difference: ${calc.subtract()}`);      // -2
console.log(`Product: ${calc.multiply()}`);         // 0
console.log(`Quotient: ${calc.divide()}`);          // NaN

console.log(`\n`);

calc = new Calculator([2, 'seven', 4, null, 8]);

console.log(calc.add());        // 14
console.log(calc.multiply());   // 64

console.log(calc.getRejectedValues());

console.log(`\n`);

console.log(`Testing floating-point sum order and precision\n`);

const data = Array.from({ length: 1000 }, () => Math.random());
const sum1 = data.reduce((acc, val) => acc + val, 0);
const sum2 = [...data].reverse().reduce((acc, val) => acc + val, 0);

console.log('Suma normalna: ', sum1);
console.log('Suma odwrócona: ', sum2);
console.log('Czy są równe? ', sum1 === sum2); 
console.log('Różnica: ', Math.abs(sum1 - sum2)); 
