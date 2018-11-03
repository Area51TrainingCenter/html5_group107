var titulo;

/*titulo1=document.getElementsByTagName('h1')
titulo2=document.getElementById('titulo')
titulo3=document.getElementsByClassName('clase');
*/

/*querySelector
querySelectorAll*/

/*innerHtml=""*/
titulo=document.getElementById("titulo");


var accion1=document.getElementById("cambiartexto");

accion1.addEventListener("click",cambiarTexto)
//accion1.addEventListener("mouseenter",cambiarTexto)
function cambiarTexto(){
	titulo.innerHTML='Texto Modificado <span class="texto">desde JS</span>'
}

var accion2=document.getElementById("regresartexto");
accion2.addEventListener("click",regresarTexto)

function regresarTexto()
{
	titulo.innerHTML="Bievenido a los eventos"
}




