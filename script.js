function isPalindrome(string) {
  let reverseString = ''
  let strippedString = string.replace(' ', '')
  for(let i = strippedString.length -1; i >= 0; i--){
    reverseString += strippedString[i]
  }
  console.log(string)
  console.log(reverseString);
  console.log(reverseString === strippedString)
}

isPalindrome('taco cat')
isPalindrome('kayak')
isPalindrome('hello')

// regex info:
// Let’s look at the individual parts of the Regex and determine what they do:

// \s: matches any whitespace symbol: spaces, tabs, and line breaks
// +: match one ore more of the preceding tokens (referencing \s)
// g: the g at the end indicates iterative searching throughout the full string

// Solution 1:
// function isPalindrome(str) {
//   return str === str.split(' ').reverse().join('') // Three iterations
// }

// Solution 2:
// function isPalindrome(str) {
//   for(let i=0; i < Math.floor(str.length/2); i++){
//     let start = str[i]
//     let end = str[str.length-1-i]
//     if(start !== end) {
//       return false
//     }
//   }
//   return true