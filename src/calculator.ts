import { is_finite_number, format_value } from './sum_with_guards.ts';

export class Calculator {
    private readonly values: number[] = [];
    private readonly rejected: [unknown, number][] = [];

    constructor(input: unknown[]) {
        for (const [idx, val] of input.entries()) {
            if (is_finite_number(val)) {
                this.values.push(val);
            } else {
                this.rejected.push([val, idx]);
            }
        }

        this.displayRejected();
    }

    private displayRejected(): void {
        if (this.rejected.length > 0) {
            const formatted = this.rejected
                .map(([val]) => format_value(val))
                .join(', ');

            console.log(`Rejected values: ${formatted}`);
        }
    }

    getRejectedValues(): [unknown, number][] {
        return [...this.rejected];
    }

    private calculate(op: (acc: number, val: number) => number): number {
        if (this.values.length === 0) {
            return NaN;
        }

        const result = this.values.reduce((acc, val) => {
            return Number.isFinite(acc) ? op(acc, val) : acc;
        });

        return Number.isFinite(result) ? result : NaN;
    }

    add(): number {
        return this.calculate((acc, val) => acc + val);
    }

    subtract(): number {
        return this.calculate((acc, val) => acc - val);
    }

    multiply(): number {
        return this.calculate((acc, val) => acc * val);
    }

    divide(): number {
        return this.calculate((acc, val) => acc / val);
    }
}
