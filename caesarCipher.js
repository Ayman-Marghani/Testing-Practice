const NUM_OF_CHARS = 26;
function isAlpha(char) {
  return /^[a-zA-Z]$/.test(char);
}
function caesarCipher(str, key) {
  let result = '';
  for (char of str) {
    // If char is alphabetic
    if (isAlpha(char)) {
      const asciiVal = char.charCodeAt(0);
      // If char is lowercase then startVal is 97 (a) and if it's uppercase then startVal is 65 (A)
      const startVal = /^[a-z]/.test(char) ? 97 : 65;
      let newAsciiVal = asciiVal +  key - startVal; 
      newAsciiVal = newAsciiVal % NUM_OF_CHARS + startVal;
      result += String.fromCharCode(newAsciiVal);
    }
    else {
      result += char;
    }
  }
  return result;
}

module.exports = caesarCipher;