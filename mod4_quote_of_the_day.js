let fs = require('fs');

exports.quote_of_the_day =  () => {
	// archivo a leer
	let _archivo = 'mod4-quotes_of_the_day.json';
	fs.readFile(
		_archivo,
		(err, data) => {
			if(err) throw err;
			let _citas = JSON.parse(data);			
			if(_citas.length > 0){
				// Halla un número aletorio que sera el indice de la cita a mostrar
				let i = (Math.floor(Math.random() * _citas.length)).toFixed(0);				
				console.log("Quote of the day: ");
				console.log(_citas[i]);
			}
		}
	)
}

