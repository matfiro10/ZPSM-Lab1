import filter from 'lodash/filter.js';
import reduce from 'lodash/reduce.js';
import map from 'lodash/map.js';
import { is_finite_number, format_value } from './sum_with_guards.ts';

export class CalculatorLodash {
    private readonly values: number[];
    private readonly rejected: unknown[];

    constructor(input: unknown[]) {
        this.values = filter(input, is_finite_number);
        this.rejected = filter(input, (val) => !is_finite_number(val));

        this.displayRejected();
    }

    private displayRejected(): void {
        if (this.rejected.length > 0) {
            const formatted = map(this.rejected, (val) => format_value(val)).join(', ');
            console.log(`Rejected values: ${formatted}`);
        }
    }

    private calculate(op: (acc: number, val: number) => number): number {
        if (this.values.length === 0) {
            return NaN;
        }

        const result = reduce(this.values, (acc, val) => {
            return Number.isFinite(acc) ? op(acc, val) : acc;
        });

        return is_finite_number(result) ? result : NaN;
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
