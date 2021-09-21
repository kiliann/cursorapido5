'use strict'
console.log('Js Cargado');


//objetos
let objeto ={
  atributo: 78,
  nombre: 'Perico palotes',
  parejas:['maria', 'pedro','marco'],
  metodo1:function(num){
    console.log('metodo 2'+ num*2);
  }
};

console.log(objeto);
console.log('Me llamo' + objeto.nombre);
console.log('Una de mis parejas es ' + objeto.parejas[1]);

//let funcion1 = function (){...}
function funcion1(){
    document.write('Me enetacata JavaScript')
}
funcion1();

//-----------------

let num = 7 //delacar num como numero
num = funcion1 // lo asigna a la funcion  y cambia funcion

num();



objeto.metodo = funcion1

objeto.metodo()


//Parametros de funciones
function suma(a,b){
  console.log(a+b);
}

console.log(suma(5,8));
console.log(suma(2));

function ejecuta(callback){
  console.log('Ejecutando...');
  callback()
}

ejecuta(funcion1)
//ejecuta(funcion2)

//Excepciones

try{
  let num1 =45
  console.log(nombre.substr(2,4));
}
catch(exception){
  console.log('La hemos liado');
  console.log(exception) ;
}
finally{
  console.log("ejecuto finally");
}


//Arrays

let vector = [1,2,3]
let guarreria = [1,2 'asdfedsf', function(){console.log('pffff')}, true]
let matriz = [[1,2,3],[4,5,6],[7,8,9]]
