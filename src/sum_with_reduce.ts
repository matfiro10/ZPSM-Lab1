export function sum_with_reduce(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum_with_reduce(1, 2, 3, 4, 5)); // 15
console.log(sum_with_reduce(2, 4, 6)); // 12
console.log(sum_with_reduce()); // 0
