// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  let sqLetters = [
    "11","21","31","41","51",
    "12","22","32","42","42",
    "52","13","23","33","43",
    "53","14","24","34","44",
    "54","15","25","35","45","55",
  ];

  let square = [
    "a","b","c","d","e",
    "f","g","h","i","j",
    "k","l","m","n","o",
    "p","q","r","s","t",
    "u","v","w","x","y","z",
  ]; 
  function polybius(input, encode = true) {
    // your solution code here   
    if (!encode) {
      let inputArr = input.split(' ');
      let inputDoubleSpaced = inputArr.join('  ');
      if(inputDoubleSpaced.length % 2 != 0) return false;
      let alpha = sqLetters.reduce((acc, element, index) => {
        if(element === '42') {
          acc[element] = '(i/j)';
          return acc;
        }
        acc[element] = square[index];
        return acc;
      }, {});
      const charCount = inputDoubleSpaced.length;
     
      const inputPairs = Array.from(Array(charCount/2)).map((element, index) => {
        console.log("index: ", index)
        if (inputDoubleSpaced[index * 2] === " ") return " ";
        return `${inputDoubleSpaced[(index * 2)]}${inputDoubleSpaced[((index * 2) + 1)]}`;
      });
     
      let result = "";
      for (let pair of inputPairs) {
        if (pair === " ") {
          result += " ";
        } else {
          result += alpha[pair];
        }
      }
      console.log(result);
      return result;
    }
    let alphabet = square.reduce((acc, element, index) => {
      acc[element] = sqLetters[index];
     return acc;
  }, {});

      let encodedMsg = input.toLowerCase();
      let result = "";
      for (let character of encodedMsg) {
        if (character === " ") {
      result += " ";
    } else {
      result += alphabet[character]; 
    }
  }
  return result;
  }

     

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
