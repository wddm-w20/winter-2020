// LAB STEPS

// Find the element with id #red
let $btnRed = document.querySelector('#red')

// Find the body element
let $body = document.querySelector('body')

// Make the button#red clickable
// addEventListener()

// A function that does not take arguments or return a value
function makeBodyRed() {

	// Apply the red colour to the body as a backgroud-color
	$body.style.backgroundColor = 'red'

}

// A function that takes one argument (a String)
function setBodyBackground(colour) {

	$body.style.backgroundColor = colour

}


// OBJECTS

// An Object can store primitive typed variables (like Numbers and Strings) called "parameters"
// An Object's properties can also hold a function to modify the properties, in this context called "methods"
// An Object's properties can also hold other Objects as well!
const developer = {
	name: { // an object within an object
		first: 'Grace',
		last: 'Hopper'
	},
	age: 123,    // properties (a variable)
	printName: function() {     // methods (a function)
		console.log(this.name.first)
	}
}


// See how the above are very similar? The difference is mostly in their context
let age = 123   // variable
function printName() {   // function

}









