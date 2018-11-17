/*$(window).load(function(){

})*/
$("#cargarDatos").click(function(){
	var url="http://sminnova.com/restapitrujillo/sitiosturisticos";
	//$.getJSON(url,function)

	$.getJSON(url,function(valor){
		console.log(valor);
		for(var i=0;i<valor.length;i++){
			console.log(valor[i].nombre);
			$("#listado-sitios").append(`<li onclick="verDetalle(`+valor[i].id+`)"   >
					<img class="thumb" src="`+valor[i].foto_principal+`" alt="">
					<h2 class="nombre-sitio">`+valor[i].nombre+`</h2>
				</li>`)
		}
	})
})

function verUbicacion(latitud,longitud){
console.log(latitud);
console.log(longitud)
}
function verDetalle(valor)
{
	$(".detalle").html("");
	$(".detalle").text("cargando");
	var url="http://sminnova.com/restapitrujillo/sitiosturisticos/id/"+valor

	$.getJSON(url,function(data){
		$(".detalle").html("");
		$(".detalle").append(`<img id="detalle-foto" src="`+data[0].foto_principal+`" alt="">
			<h2 id="detalle-titulo">`+data[0].nombre+`</h2>
			<p id="detalle-direccion">`+data[0].direccion+`</p>
			<div id="detalle-historia">`+data[0].historia+`</div>
			<button class="btn btn-info" onclick=verUbicacion(`+data[0].latitud+`,`+data[0].longitud+`)>Ver ubicación</button>

			`)
		
	})
}
	






