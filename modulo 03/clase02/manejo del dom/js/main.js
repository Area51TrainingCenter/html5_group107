// crear la variable para el enlace leer más

var btn_leer_mas=document.getElementById('leer-mas');
btn_leer_mas.addEventListener("click",ver_contenido);

var parrafo=document.getElementById("parrafo");
var btn_leer_menos=document.getElementById("leer-menos");

function ver_contenido(){
	event.preventDefault(); // anula el compartamiento definido por defecto para el caso en que se use la eitqueta de tipo a (<a href=""></a>)
	parrafo.classList.remove("ocultar");	
	btn_leer_menos.classList.remove("ocultar");
	btn_leer_mas.classList.add("ocultar");
}


btn_leer_menos.addEventListener("click",menos_contenido)
function menos_contenido(){
	btn_leer_menos.classList.add("ocultar");
	parrafo.classList.add("ocultar");
	btn_leer_mas.classList.remove("ocultar")


}
