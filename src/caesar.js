// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
 
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    
    const alphabet = [
      "a", "b", "c", "d", "e", "f", "g", "h", 
      "i", "j", "k", "l", "m", "n", "o", "p", 
      "q", "r", "s", "t", "u", "v", "w", "x", 
      "y", "z"
    ];
   
    if (!encode) shift = -shift; // when decoding, shift in the opposite direction
    
    return [...input.toLowerCase()].reduce((acc, val) => {
      const indices = alphabet.findIndex(letter => letter === val);
      if (indices === -1) { //to capture non alphabet characters such as spaces and other symbols
        acc += val;
      } else if (indices + shift < 0) { //to handle shifts to the left of the beginning of the alphabet (first index in the alphabet array)
        acc += alphabet[indices + shift + alphabet.length];
      } else if (indices + shift >= alphabet.length) { //to handle shifts to the right past the end of the alphabet
        acc += alphabet[indices + shift - alphabet.length];
      } else { //to handle shifts not past the beginning or end of the alphabet
        acc += alphabet[indices + shift];
      }
      return acc;

    }, "");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

