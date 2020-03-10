// Global Scope
let name1 = `Jesse`
let name2 = `Felice`


function sayHello(name) {  // Receive a parameter
	
	console.log(`Hello, ${name}!`)

}


sayHello(name1)  // Send an argument
sayHello(name2)  // Send an argument
sayHello(`Milorad`)


// The argument/parameter is like a portal between the global world (or the world it was called from) to the local function scope
