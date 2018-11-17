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

$("#registrar").click(function(){
	var nombre=$("#inp-nombre").val();
	var correo=$("#inp-correo").val();
	var facebook=$("#inp-facebook").val();

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
		$("#listado").append(`<div class="card col-md-6"  >
								<img class="card-img-top" src="https://via.placeholder.com/100x80" alt="Card image cap">
								<div class="card-body">
									<h5 class="card-title">`+nombre+`</h5>
									<p>Correo: `+correo+`</p>
									<a href="`+facebook+`" class="btn btn-primary">Facebook</a>
								 	<br>
								 	<button id="eliminar" onclick="eliminar(this)" class="btn btn-danger">Eliminar</button>
								 </div>
							</div>`)					 



})

function listar(){
	console.log("click en listar")
}
function eliminar(valor){
	console.log(valor);
	$(valor).parent().parent().remove();
	console.log("click en eliminar")	
}
/*

$("#eliminar").click(function(){
	console.log("Eliminar elemento");
})*/

