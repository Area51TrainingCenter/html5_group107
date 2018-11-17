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
		// definir la posicion del marker en el mapa
		var marker1_posicion={lat: latitud, lng: longitud};
		// seleecion el elemento html donde voy a crear el mapa
		var elemento=document.getElementById('mapa');

		// defino en una variable objeto las propiedades de mi mapa
		var opciones= {
          center: {lat: latitud, lng: longitud},
          zoom:18
        }


        // creo el mapa de google usando el elemento donde voy a crearlo y las opciones luego lo guardo en una variable map_sitios
    	var map_sitios = new google.maps.Map(elemento,opciones);
    	// creo un marker dentro del mapa usando las siguientes opciones
    	// position: posicion del marker
    	// map: mapa que fue creado en donde vas a colocar el marker
    	// animation: tipo de animacion que tiene el marker en el mapa
    	var marker = new google.maps.Marker({
    			position: marker1_posicion,
    			map: map_sitios,
    			animation: google.maps.Animation.BOUNCE,
    			icon:"data:image/png;base64,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"
    		});


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
	






