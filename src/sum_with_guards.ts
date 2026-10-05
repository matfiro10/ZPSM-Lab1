export function sum_with_guards(...values: unknown[]): number {
    let total = 0;

    for (let i = 0; i < values.length; i++) {
        const val = values[i];

        if (typeof val === 'number' && Number.isFinite(val)) {
            total += val;
        } else {
            const fmt = (typeof val === 'object' || typeof val === 'string') 
                        ? JSON.stringify(val) : String(val);

            console.log(`Argument ${i + 1} is not a number: ${fmt}`);
        }
    }
    
    return total;
}

console.log(`Total sum: ${sum_with_guards(5, "5")}\n`);
console.log(`Total sum: ${sum_with_guards(1, NaN, 2)}\n`);
console.log(`Total sum: ${sum_with_guards(1, 2, 'text', 4, 'string', 10)}\n`);
console.log(`Total sum: ${sum_with_guards(2, {}, 6)}\n`);
console.log(`Total sum: ${sum_with_guards(5, Object, () => {}, 10)}\n`);
console.log(`Total sum: ${sum_with_guards(null, undefined)}\n`);
