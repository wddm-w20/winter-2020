// Numbers and arithmetic operators
// 	Binary: + - * / ** % = += -= *= /=
//  Unary: ++ --
console.log(123 + 456); // add
console.log(123 - 456); // subtract
console.log(123 * 456); // multiply
console.log(123 / 456); // divide
console.log(123 ** 4);	// exponent
console.log(123 % 4);		// modulus

// Strings
console.log('Hello\'s world!');  // Escape character: \
console.log("<p class=\"hello\">Hello world!</p>");
console.log(`<p class="hello">
	Hello's world!
</p>`);  // Template literals: ` (can be multi-lined)

// Variable
let myCredits;    // Declare a variable
myCredits = 123;  // Assign a value

console.log(myCredits); // 123

/* 
Naming variables:
- Can not start with a number
- Should start with a small letter
- Can not use '-'
- Camel case multiple words
		.my-credits   myCredits
- No special characters other than: _ and $
- No reserved keywords
 */

console.log('--------')

// BEDMAS (or PEDMAS), Order of operations
myCredits = (5 + 2) * 3;  // myCredits = 21
console.log(myCredits); // 21

myCredits = myCredits + 5; // myCredits = 21 + 5
console.log(myCredits); // 26

myCredits += 5;  // myCredits = 26 + 5
console.log(myCredits); // 31

myCredits++; // myCredits = 31 + 1
console.log(myCredits); // 32

// Combining Numbers and Strings
console.log("You have: " + myCredits + " credits"); // Concatenate strings
console.log(`You have: ${myCredits} credits`); // Template literals
console.log("You have: ${myCredits} credits"); // Woops!

// Evaluators ${}
console.log(`1 + 1 is ${1 + 1}`);
console.log(`Your balance is $${myCredits}`);

