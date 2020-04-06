"use strict";
exports.__esModule = true;
var Mathematics;
(function (Mathematics) {
    function add(a, b) {
        return a + b;
    }
    Mathematics.add = add;
    function subtract(a, b) {
        return a - b;
    }
    Mathematics.subtract = subtract;
    function multiply(multiplicant, multiplier) {
        // Get the unsigned values of the numbers provided
        var abs_a = Math.abs(multiplicant);
        var abs_b = Math.abs(multiplier);
        // For the sake of efficiency loop only for a minimum number of times
        if (abs_b > abs_a) {
            abs_b += abs_a;
            abs_a = abs_b - abs_a;
            abs_b = abs_b - abs_a;
        }
        var product = 0;
        // add the multiplicant multiplier times to get the product
        for (var i = 0; i < abs_b; i++)
            product += abs_a;
        // if the signs of the multiplier and multiplicant opposite then the product in negative
        if (multiplicant < 0 == multiplier < 0)
            return product;
        else
            return -1 * product;
    }
    Mathematics.multiply = multiply;
    function divide(dividend, divisor) {
        var abs_dividend = Math.abs(dividend);
        var abs_divisor = Math.abs(divisor);
        var quotient = 0;
        var remainder = abs_dividend;
        if (divisor == 0) {
            throw new Error("Divide by Zero Error");
        }
        while (remainder >= abs_divisor) {
            quotient += 1;
            remainder -= abs_divisor;
        }
        return (divisor < 0 == dividend < 0) ? quotient : (-1 * quotient);
    }
    Mathematics.divide = divide;
    function modulus(dividend, divisor) {
        return subtract(dividend, multiply(divisor, divide(dividend, divisor)));
    }
    Mathematics.modulus = modulus;
})(Mathematics = exports.Mathematics || (exports.Mathematics = {}));
//# sourceMappingURL=mathematics.js.map