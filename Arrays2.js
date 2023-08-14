//METODOS DE ARRAYS

// .push(); ==> AGREGA EL ELEMENTO AL FINAL


console.log("METODO .push()");
const sandwich = ["peanut butter", "jelly", "bread"];

sandwich.push("Meat");

console.log(sandwich); //['peanut butter', 'jelly', 'bread', 'Meat']


const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
                   //    0        1     2             3       
console.log(arr2);//["Stimpson", "J", "cat", ["happy", "joy"]]

console.log(arr2[3][1]); //joy

/* ============================================================================================= */

console.log("============================================================================================= ")
//.pop(); ==> ELIMINA EL ULTIMO ELEMENTO DEL ARRAY y retorna el eliminado

console.log("METODO .pop()");

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop(); //6
console.log(oneDown); //6
console.log(threeArr); //[1,4]


/* ============================================================================================= */
console.log("============================================================================================= ")
//.shift(); ==> ELIMINA EL PRIMER ELEMENTO DEL ARRAY y retorna el eliminado

console.log("METODO shift()");

const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

console.log(ourArray); //['J', ["cat"]]
console.log(removedFromOurArray); //Stimpson

/* ============================================================================================= */
console.log("============================================================================================= ")

//.unshift(); ==> AGREGA ELEMENTOS AL PRINCIPIO DEL ARRAY
console.log("METODO unshift()");
const ourArray1 = ["Stimpson", "J", "cat"];
ourArray1.shift();//ELIMINA Stimpsons
ourArray1.unshift("Happy"); //agrega Happi al principio de la lista

console.log(ourArray1);//['Happy', 'J', 'cat']