// Global Scope
let name = `Humber`
let numTimesExecuted = 0

function sayHello() {

	// Local sayHello scope
	let greeting = `Hello`

	
	numTimesExecuted = numTimesExecuted + 1

	console.log(`${numTimesExecuted}: ${greeting}, ${name}!`)

}

sayHello()
sayHello()
sayHello()
sayHello()
sayHello()
