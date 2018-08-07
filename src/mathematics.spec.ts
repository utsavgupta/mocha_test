import { Mathematics } from "./mathematics"
import { describe, it } from "mocha"
import { assert } from "chai"

describe("Mathematical functions", function() {
    describe("Addition function", function() {
        it("should return 5 when called with 3 and 2", function() {
           assert.equal(Mathematics.add(3,2), 5)
        }) 
    })

    describe("Subtraction function", function() {
        it("should return 2 when subtracting 7 from 9", function() {
           assert.equal(Mathematics.subtract(9,2), 7)
        })
    })

    describe("Multiplication function", function() {
        it("should return 10 when 5 is multiplied by 2", function() {
           assert.equal(Mathematics.multiply(5,2), 10)
        })

        it("should return 0 when 5 is multiplied by 0", function() {
            assert.equal(Mathematics.multiply(5,0), 0)
         })

        it("should return 20 when 2 is multiplied by 10", function() {
            assert.equal(Mathematics.multiply(2,10), 20)
        }) 

        it("should return -15 when 5 is multiplied by -3", function() {
            assert.equal(Mathematics.multiply(5,-3), -15)
        })

        it("should return -15 when -5 is multiplied by 3", function() {
            assert.equal(Mathematics.multiply(-5,3), -15)
        })

        it("should return 15 when -5 is multiplied by -3", function() {
            assert.equal(Mathematics.multiply(-5,-3), 15)
        })
    })

    describe("Division function", function() {
        it("should return 2 when 10 is divided by 5", function() {
            assert.equal(Mathematics.divide(10, 5), 2)
        })

        it("should return -9 when 27 is divided by -3", function() {
            assert.equal(Mathematics.divide(27, -3), -9)
        })

        it("should return 5 when -25 is divided by -5", function() {
            assert.equal(Mathematics.divide(-25, -5), 5)
        })

        it("should return -5 when -20 is divided by 4", function() {
            assert.equal(Mathematics.divide(-20, 4), -5)
        })

        it("should return throw an error when 10 is divided by 0", function() {
            assert.throw(() => Mathematics.divide(10, 0), "Divide by Zero Error")
        })
    })

    describe("Modulus function", function() {
        it("should return 0 when 10 is divided by 5", function() {
            assert.equal(Mathematics.modulus(10, 5), 0)
        })

        it("should return 3 when 19 is divided by 8", function() {
            assert.equal(Mathematics.modulus(19, 8), 3)
        })

        it("should return 2 when 27 is divided by 5", function() {
            assert.equal(Mathematics.modulus(27, 5), 2)
        })

        it("should return throw an error when 10 is divided by 0", function() {
            assert.throw(() => Mathematics.modulus(10, 0), "Divide by Zero Error")
        })
    })
})