var usuarios=[];


$("#agregar").click(function(){
	
	var persona={
		nombre:$("#inp-nombres").val(),
		apellidos:$("#inp-apellidos").val(),
		celular:$("#inp-celular").val(),
		facebook:$("#inp-facebook").val()
	}
	usuarios.push(persona);
	limpiarCajas();
	/*var nombres=$("#inp-nombres").val()
	var apellidos=$("#inp-apellidos").val()
	var celular=$("#inp-celular").val()
	var facebook=$("#inp-facebook").val()*/

	
})


$("#ver-registros").click(function(){
	var limite=usuarios.length;
	$(".listado").html("");

	for (var i = 0; i< limite; i++) {
	$(".listado").append("<li>"+usuarios[i].nombre+"</li>")	
	}
	

})

function limpiarCajas(){
	$("#inp-nombres").val("")
	$("#inp-apellidos").val("")
	$("#inp-celular").val("")
	$("#inp-facebook").val("")
}