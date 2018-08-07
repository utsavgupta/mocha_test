import { Mathematics } from "../src/mathematics"
import { describe, it } from "mocha"
import { assert } from "chai"

describe("Mathematical functions", function() {
    describe("Addition function", function() {
        it("should return 5 when called with 3 and 2", function() {
           assert.equal(Mathematics.add(3,2), 5)
        })

        it("should return -1 when called with -3 and 2", function() {
            assert.equal(Mathematics.add(-3,2), -1)
         })

         it("should return 6 when called with 6 and 0", function() {
            assert.equal(Mathematics.add(6,0), 6)
         }) 
    })

    describe("Subtraction function", function() {
        it("should return 2 when subtracting 7 from 9", function() {
           assert.equal(Mathematics.subtract(9,2), 7)
        })
    })
})