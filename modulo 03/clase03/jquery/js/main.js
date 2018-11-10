/*$(".item-thumb").click(function(){
	console.log("click");
})*/

/* forma pulpin */
/*
$("#foto-1").click(function(){
	$("#foto-1").addClass("activo")
	$("#foto-2").removeClass("activo")
	$("#foto-3").removeClass("activo")
})
$("#foto-2").click(function(){
	$("#foto-2").addClass("activo")
	$("#foto-3").removeClass("activo")
	$("#foto-1").removeClass("activo")
})
$("#foto-3").click(function(){
	$("#foto-3").addClass("activo")
	$("#foto-1").removeClass("activo")
	$("#foto-2").removeClass("activo")
})
*/
/* v2 */
/*
$("#foto-1").click(function(){
	$(".list-img-thumb li").removeClass("activo");
	$("#foto-1").addClass("activo")
	var ruta=$("#foto-1").find("img").attr("src");
	console.log(ruta);
	$(".foto-principal").attr("src",ruta)


})
$("#foto-2").click(function(){
	$(".list-img-thumb li").removeClass("activo");
	$("#foto-2").addClass("activo")
	var ruta=$("#foto-2").find("img").attr("src");
	console.log(ruta);
	$(".foto-principal").attr("src",ruta)

})
$("#foto-3").click(function(){
	$(".list-img-thumb li").removeClass("activo");
	$("#foto-3").addClass("activo")
	var ruta=$("#foto-3").find("img").attr("src");
	console.log(ruta);
	$(".foto-principal").attr("src",ruta)

})*/



/**version pro **/
/*
$(".list-img-thumb li").click(function(){
	$(".list-img-thumb li").removeClass("activo");
	$(this).addClass("activo");
	var ruta=$(this).find("img").attr("src");
	console.log(ruta);
	$(".foto-principal").attr("src",ruta)


})
*/
/*
utilizando version customizada de la foto
*/
$(".list-img-thumb li").click(function(){
	$(".list-img-thumb li").removeClass("activo");
	$(this).addClass("activo");
	var ruta=$(this).attr("data-foto");
	$(".foto-principal").attr("src",ruta);
	


})