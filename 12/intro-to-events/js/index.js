// Find the element with id #red
let $btnRed = document.querySelector('#red')
let $body = document.querySelector('body')


// Make the button#red clickable
function makeBodyRed() {

	// Apply the red colour to the body as a backgroud-color
	$body.style.backgroundColor = 'red'

}




// Connect a function to the occurrence of an an event
// 1. Who am I watching?
// 2. What am I waiting for?
// 3. What do I do when it happens?
// Bind them together using an Element method called: addEventListener


//  1                      2           3
$btnRed.addEventListener('click', makeBodyRed)

//  1                      2                      3
$btnRed.addEventListener('click', () => $body.style.backgroundColor = 'red')



