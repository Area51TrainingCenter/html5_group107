/* variables */
var numero1=10;
var cadenas="hola";
var estados=true;
var fecha=new Date();
var listado=["juan","diana","Martin", "Daniel"]
var objeto={
	nombre:"",
	descripcion:"",
	precio:""
}

var num1=parseInt("10")
var mes=fecha.getMonth();
var anio=fecha.getFullYear();
var día=fecha.getDate();

/** objeto Math **/

var numeroEntero=10.40;
Math.round(10.40) // redondear numeros
Math.ceil(10.1);// =11 ... redonde al numero inmediato superior
Math.floor(10.9); // = 10 ... redondedo al numero inmediato anterior
Math.max(10,230,30) // =230 ... devuelve el máximo valor
Math.min(10,40,3) // =3 ... devuleve el minimo valor 


var respuesta=igv(100)

function igv(valor){
	return valor*0.18;
}


var aleatorio=Math.random()*100 // número aleatorio entre 0 y 1
var sinDecimales=Math.round(aleatorio);
console.log(aleatorio);
console.log(sinDecimales);



/** arreglos **/

listado[0] // accedo al primer elemento de un arreglo
console.log(listado)
listado.push("nuevo elemento") // te permite agregar un elemento al final del arreglo
console.log(listado)
listado.pop();
console.log(listado)


// Objetos 
console.log(objeto.fecha_lanzamiento)

objeto.nombre // acedemos a la propiedad nombre
objeto.descripcion="nueva descripcion";
objeto.fecha_lanzamiento="enero 2019";
console.log(objeto.fecha_lanzamiento)

// funciones

function calcular(valor){
	return valor*10;
}



