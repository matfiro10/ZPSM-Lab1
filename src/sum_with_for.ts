export function sum_with_for(...numbers: number[]): number {
    let total = 0;

    for (const n of numbers) {
        total += n;
    }
    return total;
}
