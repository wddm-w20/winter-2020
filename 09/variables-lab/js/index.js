/* 
JAVASCRIPT VARIABLES
Complete the required JavaScript code underneath each "EXERCISE". In the end, you will have 5 statements logged to the console using: console.log()
*/

//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

let jobTitle = "Teacher"
let geoLocation = "Toronto"
let annSalary = 1000000000
let companyName = "Humber"

// Output to console
console.log(`You will be a ${jobTitle} in ${geoLocation}, making $${annSalary} for ${companyName}.`)

// Output to the document
// Find the element
let ex1output = document.querySelector('#ex1')
ex1output.textContent = `You will be a ${jobTitle} in ${geoLocation}, making $${annSalary} for ${companyName}.`





//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.


let ex2output = document.querySelector('#ex2')



//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".


//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".


//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."
