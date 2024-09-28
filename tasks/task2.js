function reverseWithoutNumbers(str) {
  let letters = [];
  
  for (let char of str) {
    if (isNaN(parseInt(char))) {
      letters.push(char);
    }
  }
  
  let reversed = '';
  for (let i = letters.length - 1; i >= 0; i--) {
    reversed += letters[i];
  }
  
  return reversed;
}

console.log(reverseWithoutNumbers("hello123world456")); 
console.log(reverseWithoutNumbers("abc123xyz"));      

module.exports = reverseWithoutNumbers;
