// Write your tests here!
const polybius = require("../src/polybius.js").polybius;
const expect = require("chai").expect;

describe("polybius", () => {
    it('should encode a message by translating each letter to number', () => {
        let expected = "4432423352125413";
        let actual = polybius("thinkful");
        expect(actual).to.equal(expected);
    });

    it('should translate (i/j) to 42', () => {
        let expected = 'th(i/j)nkful';
        let actual = polybius("4432423352125413", false);
        expect(actual).to.equal(expected);
    });

    it('should leave spaces as are', () => {
        let expected = '3251131343 2543241341';
        let actual = polybius("Hello world", true);
        expect(actual).to.equal(expected);
    });

    it('should ignore capitol letters', () => {
        let expected = 'hello world';
        let actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    });

    it('the number of characters in the string excluding spaces should be even', () => {
        let expected = false;
        let actual = polybius("44324233521254134", false);
        expect(actual).to.equal(expected);
    })
})