/* modo pulpin */
/*
$(".list-img-thumb li").click(function(){
	//$(".modal").addClass("mostar-modal")
	$(".modal").show();
	var foto=$(this).attr("data-foto");
	$(".foto-modal").attr("src",foto);
})

$(".close-modal").click(function(){
	$(".modal").hide();
})
*/



$(".list-img-thumb li").click(function(){
	//$(".modal").addClass("mostar-modal")
	$(".modal").fadeIn(1000);
	var foto=$(this).attr("data-foto");
	$(".foto-modal").attr("src",foto);
})

$(".close-modal").click(function(){
	$(".modal").fadeOut(1000);
})