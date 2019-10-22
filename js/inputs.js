




$("#contato").click(function(){
    $("#contato").removeClass("pisca");
});

$("#b_form").click(function(){
    alert("Formulario Enviado");
});
//Ao clicar no Nome
$("#cnome").click(function(){
	var nome=document.querySelector("#cnome");
    nome.value="";
    
});
//Ao clicar no Email
$("#cemail").click(function(){
	var nome=document.querySelector("#cemail");
    nome.value="";
});
//Ao clicar no ddd
$("#ddd").click(function(){
	var nome=document.querySelector("#ddd");
    nome.value="";
});
//Ao clicar no Numero
$("#numero").click(function(){
	var nome=document.querySelector("#numero");
    nome.value="";
    
});
//Ao clicar na Cidade
$("#cidade").click(function(){
	var nome=document.querySelector("#cidade");
    nome.value="";
});
