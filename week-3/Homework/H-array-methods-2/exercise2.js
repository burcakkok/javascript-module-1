/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  let wordsArray = str.toLowerCase().split(' ')
  let capsArray = []
  
  wordsArray.forEach(word => {
      capsArray.push(word[0].toUpperCase() + word.slice(1))
  });
  
  return capsArray.join(' ')
}

// function capitalise(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }

// const caps = str.split(' ').map(capitalize).join(' ');
// caps;
/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
var name = "daniel";

console.log(capitalise(name));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Daniel
  Hello
*/
