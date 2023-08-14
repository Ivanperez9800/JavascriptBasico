//if - else - else if

//condicionales, se utilizan para tomar una desicion en una condicion retorna true si es verdadera y falsa si es falso

let n = 5;


console.log("Condicion falsa");
if (n > 8){
    console.log("true");
}else{
    console.log("false"); // entrara e imprimira false
}

console.log("============================================================================================= ")


console.log("Condicion verdadera");

if (n < 6){
    console.log("true");// entrara e imprimira true
}else{
    console.log("false"); 
}


console.log("============================================================================================= ")


//operador ternario
console.log("Operador Ternario");
//condición ? expresion verdadera : expresion falsa

console.log(n > 7 ? "True" : "False");

console.log("============================================================================================= ")
//USANDO UNA FUNCION PARA RETORNAR UN OPERADOR TERNARIO

// Setup
function abTest(a, b) {
    return a < 0 || b < 0 ? undefined : Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }

  
//si a o b es menor que 0 devuelve undefined sino devuelve la suma entre las raices cuadradas de a y b
console.log(abTest(2,2)); //8
console.log(abTest(-1,2)) //undefined