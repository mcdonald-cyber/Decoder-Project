// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const substitutionModule = (function () {
  // you can add any code you want within this function scope
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (!alphabet || alphabet.length !== 26) return false
    // console.log(alphabet)
    let alphabetCheck = []
    for (let i = 0; i < alphabet.length; i ++){
      if (!alphabetCheck.includes(alphabet[i])){
        alphabetCheck += (alphabet[i])
      }else { return false }
    }
    const actualAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const userInput = input.toLowerCase().split("");
    const userAlphabet = alphabet.toLowerCase().split("");
    //====================================ENCODE==================================================
    if (encode){
        const mapped = userInput.map((letter) => {
          if (letter == ' '){
            return letter
          } else {
            let position = actualAlphabet.indexOf(letter)
            
            return userAlphabet[position]
          }
        }).join('')
          return mapped
    }
    //=====================================DECODE==================================================
    if (!encode){
      const mapped = userInput.map((letter) => {
        if (letter == ' '){
          return letter
        } else {
          let position = userAlphabet.indexOf(letter)
          return actualAlphabet[position]
        }
      }).join('')
        return mapped
  }
}return {
    substitution,
  };
})();
module.exports = { substitution: substitutionModule.substitution };