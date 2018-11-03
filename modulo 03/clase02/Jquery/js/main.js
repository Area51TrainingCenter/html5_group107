/*var btn_leer_mas=document.getElementById('leer-mas')
btn_leer_mas.addEventListener("click",tarea)
function tarea(){
	// mostar etiqueta p
}*/
$("#leer-mas").click(tarea);

function tarea(){
	/*$("#parrafo").removeClass("ocultar");*/
	/*$("#parrafo").fadeIn();*/
	$("#parrafo").slideDown();
	$("#leer-menos").removeClass("ocultar");
	$("#leer-mas").addClass("ocultar")
}


$("#leer-mas").click(function(){
	$("#parrafo").slideDown();
	$("#leer-menos").removeClass("ocultar");
	$("#leer-mas").addClass("ocultar")
})





$("#leer-menos").click(tarea2)
function tarea2(){
	/*$("#parrafo").addClass("ocultar");*/
	/*$("#parrafo").fadeOut();	*/
	$("#parrafo").slideUp();
	$("#leer-menos").addClass("ocultar");
	$("#leer-mas").removeClass("ocultar")
}

$("#leer-menos").click(function(){
	$("#parrafo").slideUp();
	$("#leer-menos").addClass("ocultar");
	$("#leer-mas").removeClass("ocultar")	
})


