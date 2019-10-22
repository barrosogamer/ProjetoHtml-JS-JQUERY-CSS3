//parar form
$("#contato").click(function () {
    $("#contato").removeClass("pisca");
})


 var nomevazio=document.getElementById("cnome").value;

//Valida Campo Nome Ao clicar em Email
$("#cemail").click(function () {

    validaNome();
});
//Valida Campo email Ao clicar em telefone
$("#ddd").click(function () {

    validaEmail();
});
//Valida Campo ddd e numero Ao clicar em cidade
$("#cidade").click(function () {
    ;

    validaNumero();
});
//Valida Campo Cidade ao Clicar no Assunto
$("#textarea").click(function () {

    validaCidade();
});

//Botao valida tudo
$("#b_form").click(function () {
    validaNome();
    validaEmail();
    validaNumero();
    validaCidade();
    var nome = document.querySelector("#cnome").value;
    var email = document.querySelector("#cemail").value;
    var ddd = document.querySelector("#ddd").value;
    var numero = document.querySelector("#numero").value;
    var estado = document.getElementById("estados").value;
    var cidade = document.querySelector("#cidade").value;
    var assunto = document.querySelector("#textarea").value;


    if (!$("input").hasClass("erro")) {
        alert("Nome: " + nome + "\n" + "Email: " + email + "\n" + "Numero: " + ddd + numero + "\n" + "Estado:" + estado + "\n" + "Cidade:" + cidade + "\n" + "Assunto:\n" + assunto);
        alert("Mensagem Enviada");

        document.getElementById("cnome").value = "";
        document.getElementById("cemail").value = "";
        document.getElementById("ddd").value = "";
        document.getElementById("numero").value = "";
        document.getElementById("estados").value = "AC";
        document.getElementById("cidade").value = "";
        document.getElementById("textarea").value = "";
        var nomevazio=document.getElementById("cnome").value;
        

    };


    

});



///Validadores
//Nome
function validaNome() {
    var nomecampo = document.querySelector("#cnome").value;
    if (nomecampo.length == 0) {
        $("#cnome").removeClass("refaz").addClass("erro");
        document.getElementById("n_erro").textContent = "Digite um Nome Aqui";
    }

    if (nomecampo.length > 0) {
        $("#cnome").removeClass("erro").addClass("refaz");
        document.getElementById("n_erro").textContent = "";
    } else {

    }
}
//Email
function validaEmail() {
    var nomecampo = document.querySelector("#cemail").value;
    if (nomecampo.length == 0) {
        $("#cemail").removeClass("refaz").addClass("erro");
        document.getElementById("e_erro").textContent = "Digite seu Email Aqui";
    }

    if (nomecampo.length > 0) {
        $("#cemail").removeClass("erro").addClass("refaz");
        document.getElementById("e_erro").textContent = "";
    } else {

    }
};
//Numero
function validaNumero() {
    var nomecampo = document.querySelector("#ddd").value;
    var nomecampo1 = document.querySelector("#numero").value;

    if (!isNaN(nomecampo) && !isNaN(nomecampo1)) {
        if (nomecampo.length == 0 || nomecampo1.length == 0) {
            $("#ddd").removeClass("refaz").addClass("erro");
            document.getElementById("dn_erro").textContent = "Digite o Numero do Celular ou Telefone Aqui";

        }
        if (nomecampo.length > 0) {
            $("#ddd").removeClass("erro").addClass("refaz");
        }
        if (nomecampo.length > 0 && nomecampo1.length > 0) {

            document.getElementById("dn_erro").textContent = "";
        }
        if (nomecampo1.length == 0) {
            $("#numero").removeClass("refaz").addClass("erro");
            document.getElementById("dn_erro").textContent = "Digite o Numero do Celular ou Telefone Aqui";
        }

        if (nomecampo1.length > 0) {
            $("#numero").removeClass("erro").addClass("refaz");
        } else {

        }
    } else {
        document.getElementById("dn_erro").textContent = "";
        document.getElementById("dn_erro").textContent = "Digite um Numero";
        $("#numero").removeClass("refaz").addClass("erro");
        $("#ddd").removeClass("refaz").addClass("erro");
    }
};
//Cidade
function validaCidade() {
    var nomecampo = document.querySelector("#cidade").value;
    if (nomecampo.length == 0) {
        $("#cidade").removeClass("refaz").addClass("erro");
        document.getElementById("ci_erro").textContent = "Digite sua Cidade Aqui";
    }

    if (nomecampo.length > 0) {
        $("#cidade").removeClass("erro").addClass("refaz");
        document.getElementById("ci_erro").textContent = "";
    } else {

    }
}
