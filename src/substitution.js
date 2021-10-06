// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // handle errors
    if (!alphabet || alphabet.length !== 26) return false;

    const realAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
    const subAlpha = alphabet.toLowerCase().split("");
    const inputMsg = input.toLowerCase().split("");
    
    //access only special characters by declaring new variable
    //that filters through the substitute alphabet retrieving only special characters
    const specialChars = subAlpha.filter(
      (item, index, self) => self.indexOf(item) === index
    );
    if (specialChars.length !== alphabet.length) return false;

    const encodeMessage = () => {
      //create empty array,
      let result = [];
      const encode = (char) => {
        //declare new variables and assign global variable information to them,
        //then push that data to the new empty array.
        const charIndex = realAlpha.indexOf(char);
        const encodedChar = subAlpha[charIndex];
        result.push(encodedChar);
      };
      inputMsg.forEach((char) => {
        
        char === " " ? result.push(" ") : encode(char); // preserves space or encodes character
      });
      return result.join("");
    };

    const decodeMessage = () => {
      let result = [];
      const decode = (char) => {
        const charIndex = subAlpha.indexOf(char);
        const decodedChar = realAlpha[charIndex];
        result.push(decodedChar);
      };
      inputMsg.forEach((char) => {        
        char === " " ? result.push(" ") : decode(char); 
      });
      return result.join("");
    };

    // after errors are handled, next decide to encode or decode.
    return encode ? encodeMessage() : decodeMessage();
  }

    

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
