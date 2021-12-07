const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    describe("error handling", () => {
        it("should still be a string after encoding", () => {
            const message = "thinkful";
            const actual = polybius(message);
            expect(actual).to.be.a("string");
        });

        it("should return false if the number of characters in the string excluding spaces is not even", () => {
            const message = "44324233521254134";
            const actual = polybius(message, false);
            expect(actual).to.be.false;
        });
    });

    describe("encoding a message", () => {
        it("should translate i and j to 42", () => {
            const message = "thinkful";
            const actual = polybius(message);
            const expected = "4432423352125413";
            expect(actual).to.equal(expected);
        });

        it("should maintain spaces after encoding", () => {
            const message = "hello world";
            const actual = polybius(message);
            const expected = "3251131343 2543241341";
            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters when encoding", () => {
            const message = "Thinkful";
            const actual = polybius(message);
            const expected = "4432423352125413";
            expect(actual).to.equal(expected);
        });
    });

    describe("decoding a message", () => {
        it("should translate 42 to i and j", () => {
            const message = "4432423352125413";
            const actual = polybius(message, false);
            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });

        it("should maintain spaces after decoding", () => {
            const message = "3251131343 2543241341";
            const actual = polybius(message, false);
            const expected = "hello world";
            expect(actual).to.equal(expected);
        });
    });
});
