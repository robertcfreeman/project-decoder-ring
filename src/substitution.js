// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // helper function to determine if substitution alphabet contains duplicate values
  function hasDuplicates(alphabet) {
    const count = [...alphabet].reduce((acc, val) => {
      if (acc[val]) {
        acc[val]++;
      } else {
        acc[val] = 1;
      }
    
      return acc;
    }, {});

    return Object.values(count).some(letter => letter > 1);
  }
  function substitution(input, alphabet, encode = true) {
    if (!alphabet) return false;
    if (alphabet.length !== 26) return false;
    if (hasDuplicates(alphabet)) return false;

    const standardAlphabet = [
      "a", "b", "c", "d", "e", "f", "g", "h", 
      "i", "j", "k", "l", "m", "n", "o", "p", 
      "q", "r", "s", "t", "u", "v", "w", "x", 
      "y", "z"
    ];

    return [...input.toLowerCase()].reduce((acc, val) => {
      //setting indices depending on encoding or decoding
      const indices = (
       encode ? 
       standardAlphabet.findIndex(letter => letter === val) :
       [...alphabet].findIndex(letter => letter === val)
     );

     if (indices === -1) { // to maintain spaces after translation
       acc += val;
     } else {
       acc += (encode ? alphabet[indices] : standardAlphabet[indices]);
     };

     return acc
      
    }, "");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };




