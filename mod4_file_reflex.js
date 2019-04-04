
 // Imports user module mod4_quote_of_the_day.js
let my_mod = require("./mod4_quote_of_the_day");

let fs = require("fs");   // Imports file system module

console.log();
my_mod.quote_of_the_day();
console.log();
// Variable que calcula el retardo que se utilizara en setTimeout()
let delay = ((Math.ceil(Math.random()*5))*1000).toFixed(0);
//Transcurrido 'delay' desde la línea en blanco llama a reflexes()
setTimeout(reflexes, delay);


function reflexes() {
	console.log('Press Return');
	// Variable con el tiempo de comienzo
    let start = new Date().getTime();
    process.stdin.on('data', () => {
    	// Variable con el tiempo transcurrido desde el comienzo hasta 
    	// la pulsación de return
    	let stop = new Date().getTime() - start;
    	console.log(`Tiempo transcurrido ${stop} milisegundos`);
    	process.exit();
    })
};

