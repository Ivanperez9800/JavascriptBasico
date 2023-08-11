//Comentario de 1 sola linea
/*
    Comentario de 
    varias 
    lineas 
*/

//TIPO DE DATOS

//Javascript tiene 8 tipo de datos: undefined, null, boolean, string, symbol, bigint, number, and object.

/*
Variables : Sirven para guardar y manipular valores , se crean utilizando unas "etiquetas"
            para que nosotros los humanos se las identifique
*/

/*Creacion de una Variable: Se utiliza la palabra reservada "var" + nombreVariable; Se utiliza la metodologia camelCase empezando por la primera letra en minusculas, se puede utilizar "_" y "$" pero la primera letra no puede ser un numero */
var myName;

/*para darles un valor se utiliza el operador de "=" */

MyValue; //valor por defecto: Undefined
myName = "Ivan"; //tipo de dato : String
myNumber = 5; //tipo de dato : int 
myBoolean = true; // tipo de dato booleano: true o false


//USANDO LET Y VAR

//El problema principal con "var" es que al declarar dos variables con el mismo nombre se sobreescriben y gana el que se escribio a lo ultimo
var camper = "James";
var camper = "David";

//console.log(); es para imprimir en consola
console.log(camper) //Imprimira David

//este problema se solucina usando "let"

/*
let nombre = "Jose";
let nombre = "Manuel";
*/ //Esto da un error evitando que una variable ya declarada se sobreescriba 

//USO DE CONSTANTES

//Es buena practica poner el nombre de variables inmutables(que no cambian) en mayusculas
const FAV_PET = "Cats";
//FAV_PET = "Dogs"; //DARA ERROR, UNA CONSTANTE NO PUEDE CAMBIAR SU VALOR




