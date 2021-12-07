// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // helper function to pair numbers from input string into coordinates
  function toPairCoordinates(input) {
    let coordinates = [];
    for (let i = 0; i < input.length; i += 2) {
      if (input[i] === " ") {
        coordinates.push(" ");
        i--;
      } else {
        coordinates.push(`${input[i]}${input[i + 1]}`);
      };
    };
    return coordinates;
  };

  function isCipheredMessageEven(input) {
    if (input.indexOf(" ") === -1) {
      return input.length % 2 === 0;
    } else {
      const numberOfSpaces = [...input].filter(val => val === " ").length;
      return (input.length - numberOfSpaces) % 2 === 0;
    };
  };


  function polybius(input, encode = true) {
    if(!encode && !isCipheredMessageEven(input)) return false;

    if(!encode) {
      const decodeCipher = {
        11: "a",
        21: "b",
        31: "c",
        41: "d",
        51: "e",
        12: "f",
        22: "g",
        32: "h",
        42: "(i/j)",
        52: "k",
        13: "l",
        23: "m",
        33: "n",
        43: "o",
        53: "p",
        14: "q",
        24: "r",
        34: "s",
        44: "t",
        54: "u",
        15: "v",
        25: "w",
        35: "x",
        45: "y",
        55: "z"
      };
      
      const coordinates = toPairCoordinates(input); 
      return coordinates.reduce((acc, coordinate) => {
        if (coordinate === " ") {
          acc += " ";
        } else {
          acc += decodeCipher[coordinate];
        }
        return acc;
      }, "");
    }

    if(encode) {
      const encodeCipher = {
        a: 11,
        b: 21,
        c: 31,
        d: 41,
        e: 51,
        f: 12,
        g: 22,
        h: 32,
        i: 42,
        j: 42,
        k: 52,
        l: 13,
        m: 23,
        n: 33,
        o: 43,
        p: 53,
        q: 14,
        r: 24,
        s: 34,
        t: 44,
        u: 54,
        v: 15,
        w: 25,
        x: 35,
        y: 45,
        z: 55
      };

      return input.toLowerCase().split("").reduce((acc, letter) => {
        if (letter === " ") {
          acc += " ";
        } else {
          acc += encodeCipher[letter];
        }
        return acc;
      }, "");
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };


