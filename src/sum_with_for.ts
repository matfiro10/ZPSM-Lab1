export function sum_with_for(...numbers: number[]): number {
    let total = 0;

    for (const n of numbers) {
        total += n;
    }
    return total;
}

console.log(sum_with_for(1, 2, 3, 4, 5)); // 15
console.log(sum_with_for(2, 4, 6)); // 12
console.log(sum_with_for()); // 0
