function twice(value: number): number {
    return value * 2;
}

const fromOutside = 'text' as unknown as number;

console.log(twice(2)); // 4
console.log(twice(fromOutside)); // NaN
