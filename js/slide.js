$(document).ready(function(){
	console.log("carregado")
    $("#slide img:eq(0)").addClass("ativo").show();
    setInterval(slide,2000);

})

function slide(){
	console.log("slide ligado!!!");
 if($(".ativo").next().length) {
 	$(".ativo").fadeOut().removeClass("ativo").next().fadeIn().addClass("ativo");
    //se houver, irá fazer algo
    }else {
        //se não, irá retornar ao estado inicial do slide
        $(".ativo").fadeOut().removeClass("ativo");
        $("#slide img:eq(0)").fadeIn().addClass("ativo");
}
}