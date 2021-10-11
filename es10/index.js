
// Acceso a datos de matrices, convirtiendo a un array plano
let array = [1,2,3,[1,2,3,[1,2,3]]];
console.log(array.flat(2));

let array2 = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]))

//funcion trim -> elimina espacios en blanco de un string
let hello = '             hello world';
let hello2 = 'hello world             ';

console.log(hello.trimStart());
console.log(hello2.trimEnd());

//ya no es necesario pasar el error por parametro en el catch
try{

}catch{
    error
}

//crear un Object desde un array 'Entries'
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

//nuevo tipo de dato -> Symbol
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);