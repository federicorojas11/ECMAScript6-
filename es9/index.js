// -> Concatenación de objetos en es9

const obj = {
    name : 'admin',
    age : 20,
    country : 'AR',
};

let { country, ...all } = obj;
console.log(all);


const obj2 = {
    name2 : 'admin2',
    age2: 30,
}

const obj3 = {
    ...obj2,
    ...obj,
    name3 : 'admin3',
    age3 : 35,
}

console.log(obj3);


// resolución de promises con .then y .catch
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ('Hello World') , 3000)
        : reject (new Error('Test Error'))
    })
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(()=> console.log('Finalizo'))


//acceso a regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);
