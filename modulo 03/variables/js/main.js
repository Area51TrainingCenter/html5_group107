var nombre="Juan Carlos"
var edad="23"

// varibales de condicion 
var estado=true;
var estado2=false;

// variables de tipo fecha

var fecha="27/10/2018";
var fechareal=new Date();

var anio=fechareal.getFullYear();
var mes=fechareal.getMonth();
var dia_mes=fechareal.getDate();

console.log(anio);
console.log(mes);
console.log(dia_mes);
var ejemplo="Sábado "+dia_mes+" del mes "+mes+" del año "+anio;
console.log(ejemplo);
var formato_fecha=dia_mes+mes+anio;

var nombres=["jc",
						 "diana",
						 "diego",
						 "carlos",
						 "martín"]
console.log(nombres);
console.log(nombres.length);
console.log(nombres[0])
console.log(nombres[1])
console.log(nombres[2])
console.log(nombres[3])
console.log(nombres[4])
console.log(nombres[5])


var fechaActual=new Date();

var mes=fechaActual.getMonth();


var mes_verdadero=mes+1;
console.log(mes_verdadero);


var meses=["Enero",
						"Febrero",
						"Marzo",
						"Abril",
						"Mayo",
						"Junio",
						"Julio",
						"Agosto",
						"Septiembre",
						"Octubre",
						"Noviembre",
						"Diciembre"]

var mes=fechaActual.getMonth();


console.log(meses[mes])

console.log("Sábado "+fechaActual.getDate() +" de " +meses[mes]+" del año " + fechaActual.getFullYear())


var datos=["juan carlos",23,123,"*1sa$"];

// varibale de tipo objeto

var telefono={
	marca:"Samsung",
	color:"Azul",
	anio_fabricacion:"2009",
	stock:20
}

console.log(telefono);
console.log(telefono.color)
console.log(telefono.marca)
console.log(telefono.stock)


var alumno1={
	nombres:"Jc",
	edad:22,
	nivel:"Superior"
}

var alumno2={
	nombres:"Diego",
	edad:23,
	nivel:"Superior"	
}

var alumno3={
	nombres:"Diana",
	edad:23,
	nivel:"Superior"	
}

var alumnos=[{
							nombres:"Jc",
							edad:22,
							nivel:"Superior"
							},
							{
							nombres:"Jc",
							edad:22,
							nivel:"Superior"
							},
							{
							nombres:"Jc",
							edad:22,
							nivel:"Superior"
							}]

console.log(alumnos[1].nombre)




