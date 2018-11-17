/*$("#registrar").click(function(){
	event.preventDefault();
})*/

/*
	$(window).load(function(){
		

	})

	$(document).ready(function(){
		//console.log($("#registrar"))
	})
*/
var usuarios=[];

estado_grabar=false;
ind_edicion=null;
$("#registrar").click(function(){
	var nombre_=$("#inp-nombre").val();
	var correo_=$("#inp-correo").val();
	var facebook_=$("#inp-facebook").val();

	var usuario={
		nombre:nombre_,
		correo:correo_,
		facebook:facebook_
	}

	if(estado_grabar==true){
		usuarios[ind_edicion]=usuario;
		ind_edicion=null;
		estado_grabar=false;
	}
	else{
		usuarios.push(usuario);	
	}
	
	/*
	<div class="card col-md-6" >
		<img class="card-img-top" src="https://via.placeholder.com/100x80" alt="Card image cap">
		<div class="card-body">
			<h5 class="card-title">Card title</h5>
			<a href="#" class="btn btn-primary">Facebook</a>
		 </div>
	</div>
	*/
	/*$("#listado").append('<h2>'+nombre+'<h2>'+
							'<strong>'+facebook+'</strong>'
		)*/

		/*$("#listado").append('<div class="card col-md-6" >'+
								'<img class="card-img-top" src="https://via.placeholder.com/100x80" alt="Card image cap">'+
								'<div class="card-body">'+
									'<h5 class="card-title">Card title</h5>'+
									'<a href="#" class="btn btn-primary">Facebook</a>'+
								'</div>'+
							 '</div>')
							 */
		/*$("#listado").append(`<div class="card item"  >
								<img class="card-img-top" src="https://via.placeholder.com/100x80" alt="Card image cap">
								<div class="card-body">
									<h5 class="card-title">`+nombre_+`</h5>
									<p>Correo: `+correo_+`</p>
									<p>Facebook: `+facebook_+` </p>
								 	<br>
								 	<button id="eliminar" onclick="eliminar(this)" class="mt-2 btn btn-danger">Eliminar</button>
								 	<button id="editar" onclick="editar()" class="mt-2 btn btn-info">Editar</button>
								 </div>
							</div>`)*/					 

limpiar();
listarUsuarios();



})

function limpiar(){
		$("#inp-nombre").val("");
	$("#inp-correo").val("");
$("#inp-facebook").val("");
}
function listar(){
	console.log("click en listar")
}
function eliminar(valor){
	console.log(valor);
	$(valor).parent().parent().remove();
	console.log("click en eliminar")	
	limpiar();
}

function editar(valor){

	$("#inp-nombre").val(usuarios[valor].nombre);
	$("#inp-correo").val(usuarios[valor].correo);
	$("#inp-facebook").val(usuarios[valor].facebook);
	ind_edicion=valor;
	estado_grabar=true;
	
	
}


function listarUsuarios(){
/*usuarios[0]
usuarios[1]
usuarios[2]
..
..
.
usuarios.length;*/
$("#listado").html("");
	var limite=usuarios.length

	for (var i =0; i < limite ; i++) {
			

		$("#listado").append(`<div class="card item"  >
								<img class="card-img-top" src="https://via.placeholder.com/100x80" alt="Card image cap">
								<div class="card-body">
									<h5 class="card-title">`+usuarios[i].nombre+`</h5>
									<p>Correo: `+usuarios[i].correo+`</p>
									<p>Facebook: `+usuarios[i].facebook+` </p>
								 	<br>
								 	<button id="eliminar" onclick="eliminar(this)" class="mt-2 btn btn-danger">Eliminar</button>
								 	<button id="editar" onclick="editar(`+i+`)" class="mt-2 btn btn-info">Editar</button>
								 </div>
								</div>`)



	}

	
}
/*

$("#eliminar").click(function(){
	console.log("Eliminar elemento");
})*/

