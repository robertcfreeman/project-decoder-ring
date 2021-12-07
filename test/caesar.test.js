const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    describe("error handling", () => {
        it("should return false if shift is not present", () => {
            const message = "thinkful";
            const actual = caesar(message);
            expect(actual).to.be.false;
        });

        it("should return false if shift is zero", () => {
            const message = "thinkful";
            const shift = 0;
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });

        it("should return false if shift is less than -25", () => {
            const message = "thinkful";
            const shift = -30
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });

        it("should return false if shift is greater than 25", () => {
            const message = "thinkful";
            const shift = 30
            const actual = caesar(message, shift);
            expect(actual).to.be.false;
        });
    });

    describe("encoding a message", () => {
        it("should encode a message by shifting the letters", () => {
            const message = "thinkful";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "wklqnixo";
            expect(actual).to.equal(expected);
        });

        it("should allow for a negative shift by shifting to the left", () => {
            const message = "thinkful";
            const shift = -3;
            const actual = caesar(message, shift);
            const expected = "qefkhcri";
            expect(actual).to.equal(expected);
        });

        it("ignore capital letters", () => {
            const message = "This is a secret message!";
            const shift = 8;
            const actual = caesar(message, shift);
            const expected = "bpqa qa i amkzmb umaaiom!";
            expect(actual).to.equal(expected);
        });

        it("should maintain spaces and other non-alphabetic symbols in the message after encoding", () => {
            const message = "this is a secret message!";
            const shift = 8;
            const actual = caesar(message, shift);
            const expected = "bpqa qa i amkzmb umaaiom!";
            expect(actual).to.equal(expected);
        });

        it("should allow for a shift past the end of the alphabet by wrapping around to the front of the alphabet", () => {
            const message = "thinkful";
            const shift = 7;
            const actual = caesar(message, shift);
            const expected = "aopurmbs";
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding a message", () => {
        it("should decode a message by shifting the letters", () => {
            const message = "wklqnixo";
            const shift = 3;
            const actual = caesar(message, shift, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });

        it("should allow for a negative shift by shifting to the left", () => {
            const message = "qefkhcri";
            const shift = -3;
            const actual = caesar(message, shift, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });

        it("ignore capital letters", () => {
            const message = "BPQA qa i amkzmb umaaiom!";
            const shift = 8;
            const actual = caesar(message, shift, false);
            const expected = "this is a secret message!";
            expect(actual).to.equal(expected);
        });

        it("should maintain spaces and other non-alphabetic symbols in the message after encoding", () => {
            const message = "bpqa qa i amkzmb umaaiom!";
            const shift = 8;
            const actual = caesar(message, shift, false);
            const expected = "this is a secret message!";
            expect(actual).to.equal(expected);
        });

        it("should allow for a shift past the end of the alphabet by wrapping around to the front of the alphabet", () => {
            const message = "aopurmbs";
            const shift = 7;
            const actual = caesar(message, shift, false);
            const expected = "thinkful";
            expect(actual).to.equal(expected);
        });
    });
    
});
