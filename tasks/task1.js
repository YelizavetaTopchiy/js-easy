function replaceVowels(str) {

  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = '';
  
  for (let char of str) {
    if (vowels.includes(char)) {
      result += '*';
    } else {
      result += char;
    }
  }
  
  return result;
}

console.log(replaceVowels("hello world"));
console.log(replaceVowels("Javascript"));

module.exports = replaceVowels;
