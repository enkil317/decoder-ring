// Write your tests here!
const substitution = require("../src/substitution.js").substitution;
const expect = require("chai").expect;

describe("substitution", () => {
    it('should transpose letters from the standard alphabet to the substitute alphabet', () => {
        let expected = 'jrufscpw';
        let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it('should maintain soaces throughout', () => {
        let expected = 'elp xhm xf mbymwwmfj dne';
        let actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });

    it('should ignore capitol letters', () => {
        let expected = 'thinkful';
        let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    });

    it('should have 26 characters in the alphabet parameter', () => {
        let expected = "y&ii$r&";
        let actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        expect(actual).to.equal(expected);
    });

    it('should have all unique characters in the alphabet parameter', () => {
        let expected = "message";
        let actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        expect(actual).to.equal(expected);
    });
})