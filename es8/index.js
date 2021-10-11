//Object entries retorna los valores de una matriz.

const data ={
    frontend:'Juan',
    backend: 'Test',
    dev: 'Unit'
};

//Tranformar este objeto en una matriz. 
const entries = Object.entries(data);
console.log(entries);

//Si queremos saber cuantos elementos posee nuestro array ahora es posible con length
console.log(entries.length);

//Object Values: Me devuelve los valores de un objeto a un array. 
const data= {
    frontend:'Juan',
    backend: 'Test',
    dev: 'Unit'
}
const values = Object.values(data);
console.log(values);
// console.log(values.length);

// Padding: nos permite concatenar strings, pudiendo modificar la cadena string como tal.
// Podría servir del lado del front , para mostrar una estructura de elementos.
const string ='hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi'
console.log(string.padEnd(7,'hi')) // Se añade al final la palabra 'hi'


