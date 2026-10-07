export function is_finite_number(val: unknown): val is number {
    return (typeof val === 'number' && Number.isFinite(val));
}

export function format_value(val: unknown): string {
    return (typeof val === 'object' && val !== null) || typeof val === 'string'
        ? JSON.stringify(val)
        : String(val);
}

export function sum_with_guards(...values: unknown[]): number {
    let total = 0;

    for (let i = 0; i < values.length; i++) {
        const val = values[i];

        if (is_finite_number(val)) {
            total += val;
        } else {
            const fmt = format_value(val);

            console.log(`Argument ${i + 1} is not a number: ${fmt}`);
        }
    }

    return total;
}
