export namespace Mathematics {
    export function add(a: number, b: number): number {
        return a + b;
    }
    
    export function subtract(a: number, b: number): number {
        return a - b;
    }
    
    export function multiply(multiplicant: number, multiplier: number): number {
    
        // Get the unsigned values of the numbers provided
        var abs_a: number = Math.abs(multiplicant)
        var abs_b: number = Math.abs(multiplier)

        // For the sake of efficiency loop only for a minimum number of times
        if(abs_b > abs_a) {
            abs_b += abs_a
            abs_a = abs_b - abs_a
            abs_b = abs_b - abs_a 
        }
    
        var product: number = 0
    
        // add the multiplicant multiplier times to get the product
        for(let i = 0; i < abs_b; i++) 
            product += abs_a
    
        // if the signs of the multiplier and multiplicant opposite then the product in negative
        if(multiplicant < 0 == multiplier < 0)
            return product
        else
            return -1 * product
    }

    export function divide(dividend: number, divisor: number): number {
        var abs_dividend: number = Math.abs(dividend)
        var abs_divisor: number = Math.abs(divisor)

        var quotient: number = 0;
        var remainder: number = abs_dividend;

        if(divisor == 0) {
            throw new Error("Divide by Zero Error");
        }

        while(remainder >= abs_divisor) {
            quotient += 1;
            remainder -= abs_divisor;
        }

        return (divisor < 0 == dividend < 0) ? quotient : (-1 * quotient)
    }

    export function modulus(dividend: number, divisor: number): number {
        return subtract(dividend, multiply(divisor, divide(dividend, divisor)));
    }
}
