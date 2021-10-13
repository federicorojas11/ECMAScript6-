

//es7

// Includes -> true cuando existe el valor en el array
 
 let numbers = [1, 2, 3, 7, 8];
 const VALUE = 7;
 
 if (numbers.includes(VALUE)) {
   console.log(`Sí se encuentra el valor ${VALUE}`);
 } else {
   console.log(`No se encuentra el valor ${VALUE}`);
 }
 
 // Potencia -> se utiliza el operando **
 let base = 4;
 let exponent = 4;
 let result = base ** exponent;
 console.log(`Result -> ${result}`);
 