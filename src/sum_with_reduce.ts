export function sum_with_reduce(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}
