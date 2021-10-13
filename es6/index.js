
//previo a es6
function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country);    
}
newFunction();

//es6
function newFunction2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name, age, country);    
}
newFunction2();

//uso template litterals -> ``
//antes de es6
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)

//multilinea:
//antes de es6
let lorem = "Excepteur fugiat duis magna duis \n proident incididunt qui.";
//es6
let lorem2 = `Excepteur fugiat duis magna duis 
 proident incididunt qui.`;
console.log(lorem);
console.log(lorem2);

//acceso propiedades de un objeto
//antes de es6
let person = {
    'name' : 'oscar',
    'age' : 32,
    'country' : 'MX',
}
console.log(person.name, person.age);

//es6
// -> se declara variable name y age desde el objeto 
let { name, age } = person;
console.log(name, age);

//concatenacion de elementos
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Juan', 'Pedro', 'Santiago'];

let education = ['David', ...team1, ...team2];
console.log(education);

//var, let y const en es6
{
    var globalVar = 'Global Var';
}
console.log(globalVar);

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}
// console.log(globalLet);
// -> let no es accesible fuera del scope

//const
const a = 'b';
// a = 'a'; -> no es reasignable
console.log(a);


//asignacion de valores a un objeto
 let name = 'Oscar';
 let age = 32;

 //antes de es6
 const obj = {
   name: name,
   age: age
 };
 console.log(obj);
 
 // es6
 const obj2 = { name, age };
 console.log(obj2);
 
 
 // Arrow Functions 
 const names = [
   { name, age },
   { name: 'Yesica', age: 27 }
 ];
 
 let listOfNames = names.map(function(item) {
   console.log('Before ES6 -> ', item.name);
 });
 
 // es6
 let listOfNamesES6 = names.map(item => console.log(`After ES6 -> ${item.name}`));
 
 // Promises
 const helloPromise = foo => {
   return new Promise((resolve, reject) => {
     if (foo) {
       resolve('Hey!');
     } else {
       reject('Upss!');
     }
   });
 };
 
 const foo = false;
 helloPromise(foo)
   .then(response => console.log('response -> ', response))
   .then(() => console.log('message -> Hello World!'))
   .catch(error => console.log('error -> ', error));
   
 // <<----------------------------------------------------->>