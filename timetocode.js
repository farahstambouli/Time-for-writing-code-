//partie 1:String Manipulation Functions:
function reverseString(myArray) {
    let text=myArray.split(/W/);
    text.reverse()
    text.join('+');
    return text}

// Step 1. Use the split() method to return a new array
// Step 2. Use the reverse() method to reverse the new created array
// Step 3. Use the join() method to join all elements of the array into a string
//Step 4. Return the reversed string

 function countCh(arr){
    return arr.length;
 }

//fonction capitalization
 const chaine = "freeCodeCamp is an awesome resource";
const words = chaine.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

words.join(" ");
 /*methode fausse voir why
 function capitalize(myArray){
        let text=myArray.split(" ");
        return text.charAt(0).toUpperCase();
 }
 //methode aziz1
 function capWord(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
 }
 //methode aziz2
 function capWord(str) {
    var words = str.split(" ")
    var capWords = []

    for ( word of words) {
        capWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return capWords.join(" ")
}
*/



//partie 2:Array Functions:

function minMax(arr){
    var min = arr[0]
    var max = arr[0]
    for( i=0 ; i<arr.length ; i++){
    if( min>arr[i] ){
        min = arr[i]
    }
    if( max<arr[i] ){
        max=arr[i]
    }
    }
    console.log ([ min , max ])
} 
 function sumArray(arr){
    let sum = 0; 
    for (let i = 0; i < arr. length; i++) { 
    sum += arr[i]; }
     console. log(sum);
 }
//given condition: only put the impair number in an array
function filtre(arr){
    let array= [];
    let sum=0;
    for(i=0;i < arr. length; i++) {
     
        if(!(arr[i]%2==0)){
            array.push(arr[i]);
        }
    } 
    console.log(array);

}

//partie 3:Mathematical Functions:
function factoriel(){
const number = parseInt(prompt('Enter a positive integer: '));// take input from the user

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
}
function prime(n) {

    // Check if the number is equal to 1, which is not a prime number
    if (n === 1) {
      return false;
    }
    // Check if the number is equal to 2, which is a prime number
    else if (n === 2) {
      return true;
    } else {
      // Iterate from 2 to n-1 to check for factors of n
      for (var i = 2; i < n; i++) {
        // If n is divisible by i without a remainder, it is not a prime number
        if (n % i === 0) {
          return false;
        }
      } return true;
      // If no factors are found, the number is a prime number
      //return true;  
    }
}
/*function prime(n)(faux) {

    // Check if the number is equal to 1, which is not a prime number
    if (n === 1) {
      return false;
    }
    // Check if the number is equal to 2, which is a prime number
    else if (n === 2) {
      return true;
    } else {
      // Iterate from 2 to n-1 to check for factors of n
      for (var i = 2; i < n; i++) {
        // If n is divisible by i without a remainder, it is not a prime number
        if (n % i === 0) {
          return false;
        }
      }
      // If no factors are found, the number is a prime number
      return true;  
    }
}*/


/*/The Fibonacci sequence, also known as Fibonacci numbers, is defined as the sequence 
 of numbers in which each number in the sequence is equal to the sum of two numbers before it. 
The Fibonacci Sequence is given as: Fibonacci Sequence = 0, 1, 1, 2, 3, 5, 8, 13, 21,..*/
function fab(){
    // take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
}


/*
function capital(){
    let mySentence = parseInt(prompt('Enter the number of terms: '));
let words = mySentence.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}

words.join(" ");

}
*/
