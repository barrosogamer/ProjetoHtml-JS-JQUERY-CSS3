//Cabeçalho
function luz(){
    $('header').addClass('luz');
}

//Scroll
function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}

$(document).ready(function(){
    var $target=$('.box'),
        animationClass='box-cresce',
        alturajanela=$(window).height(),
        offset=alturajanela-(alturajanela/4);
    
    function animationScroll(){
        var documentotop=$(document).scrollTop();
        $target.each(function(){
            if(documentotop>boxTop(this)-offset){
               $(this).addClass(animationClass);
               }
            else{
                $(this).removeClass(animationClass);
            }
            
            
            
        })
    }
  luz();
  animationScroll();
$(document).scroll(function(){
    setTimeout(function(){
        animationScroll(),150
    })
})    
    
})



