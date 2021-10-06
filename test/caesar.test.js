// Write your tests here!
const caesar = require("../src/caesar.js").caesar;
const expect = require("chai").expect;

describe("caesar", () => {
    
    it("should return false if shift is not present, <-25, or >25", () => {
        actual = caesar("kangaroo", -45)
        expect(actual).to.equal(false);
        actual = caesar("kangaroo", 54)
        expect(actual).to.equal(false);
        actual = caesar("kangaroo");
        expect(actual).to.equal(false);
    })
    it("Spaces should be maintained throughout, as should other non-alphabetic symbols.", () => {
        actual = caesar("this is a secret message!", 8);
        expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.equal(expected);
    })
    it("decoder should be working", () => {
        actual = caesar("wklqnixo", 3, false);
        expected = "thinkful";
        expect(actual).to.equal(expected);
    })
    it("should ignore capitol letters", () => {
        actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expected = "this is a secret message!"
        expect(actual).to.equal(expected);
    })
    it("should wrap around the alphabet", () => {
        actual = caesar("thinkful", -3);
        expected = "qefkhcri";
        expect(actual).to.equal(expected);
    })
    it("should return a string from single word input", () => {
        actual = caesar("thinkful", 3);
        expected = "wklqnixo";
        expect(actual).to.equal(expected);
    })
})