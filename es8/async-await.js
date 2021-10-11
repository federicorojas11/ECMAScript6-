
//uso de funciones asincronas


//  -> Se declara una nueva promesa con un setTimeout
const helloWorld = (number) => {
    return new Promise((resolve,reject) =>{
        number > 10
        ? setTimeout(() => resolve ('Hello World - numero mayor a 10'), 3000)
        : reject(new Error('Test Error - numero menor a 10'))
    })
}

//  -> Se declara una constante usando async await 
const helloAsync = async (number) => {
    try{
    const result = await helloWorld(number);
    console.log(result); // Todo salió bien.
    console.log('Gracias por su test!');}
    catch(error){
        console.log('Ocurrió un error!');
        console.log(error);// Se muestra la traza de error.
    }
}

helloAsync(50);

/* <-- ------------------------ --> */
//manejo de errores en funciones async await
 const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
   }catch(error){
       console.log(error);
   }
}

anotherFunction();
 

