var btn=document.getElementById('enviar')
btn.addEventListener("click",obtenerDatos)

var nombre=document.getElementById("inp-nombre");
var apellidos=document.getElementById("inp-apellidos");
var mensaje=document.getElementById("mensaje");

var errorNombre=document.getElementById("alerta-nombre");
var errorApellido=document.getElementById("alerta-apellido")
function obtenerDatos(){
	//event.preventDefault();

	valorNombre=nombre.value;
	valorApellido=apellidos.value;
	var nombreSinEspacios=valorNombre.trim();
	var apellidosSinEspacios=valorApellido.trim()

	console.log(nombreSinEspacios)

	if(nombreSinEspacios==""){
		console.log("usuario no ingreso nombre")

		
		errorNombre.innerHTML="Ingresa tu Nombre para continuar"
	}
	else{
		if(apellidosSinEspacios==""){
			
			errorApellido.innerHTML="Ingresa tu apellido para continuar"
			errorNombre.innerHTML=""
		}
		else{
			console.log("si ingreso todos los datos")
			//imprimo el mensaje
			mensaje.innerHTML=valorNombre +" "+ valorApellido + "."
			nombre.value="";
			apellidos.value="";

				errorApellido.innerHTML=""
			errorNombre.innerHTML=""
		}

	}



	


	

}