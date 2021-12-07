// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    describe("error handling", () => {
        it("should return false if the alphabet parameter doesn't contain a string of exactly 26 characters", () => {
            const input = "thinkful";
            const alphabet = "shorts";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        });

        it("should return false if the alphabet string contains any duplicate values", () => {
            const input = "thinkul";
            const alphabet ="abcdefff";
            const actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        });

        it("should return false if the substitution alphabet is missing", () => {
            const input = "thinkful";
            const actual = substitution(input);
            expect(actual).to.be.false;
        })
    });

    describe("encoding a message", () => {
        it("should correctly translate a given phrase based on the alphabet given to the function", () => {
            const input = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input, alphabet);
            const expected = 'jrufscpw';
            expect(actual).to.equal(expected);
        });

        it("should maintain spaces after translation", () => {
            const input = "you are an excellent spy";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input, alphabet);
            const expected = "elp xhm xf mbymwwmfj dne";
            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters after translation", () => {
            const input = "Thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input, alphabet);
            const expected = 'jrufscpw';
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding a message", () => {
        it("should correctly translate a given phrase based on the alphabet given to the function", () => {
            const input = 'jrufscpw';
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input, alphabet, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });

        it("should maintain spaces after translation", () => {
            const input = "elp xhm xf mbymwwmfj dne";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input, alphabet, false);
            const expected = "you are an excellent spy";
            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters after translation", () => {
            const input = 'Jrufscpw';
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input, alphabet, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });
    });

})