// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function toCode(array) {
    return array.map((character) => {
      const qcode = character.toLowerCase().charCodeAt();
      return qcode >= 97 && qcode <= 122 ? qcode : character;
    });
  }
  //Map over the input argument assign lowercase letters to matching capitol letters.

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (shift < -25 || shift > 25 || !shift) {
      return false;
    } //evaluates the shift argument to determine a false value.
    if (!encode) {
      shift = shift * -1;
    } //inverts shift for decode mode

    let userInput = input.split("");
    let numInput = toCode(userInput);

    let numShift = numInput.map((number) => {
      return typeof number === "number" ? number + shift : number;
    });
      //shifts valid characters, excluding spaces
    let numLoopWrap = numShift.map((number) => {
      if (typeof number === "number") {
        if (number < 97) {
          return number + 26;
        }
        if (number > 122) {
          return number - 26;
        }
      }
      return number;
    });
    //shift left of "a" to "z" and right of "z" to "a"
    
    let output = numLoopWrap.map((number) => {
      return typeof number === "number" ? String.fromCharCode(number) : number;
    });
    return output.join("");
  } //convert toCode back into a string for the resulting output

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
