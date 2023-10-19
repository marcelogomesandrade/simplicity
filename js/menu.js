"use strict";

//Selecionando o elemento que acionará o menu / através de descendência

const botaoMenu = document.querySelector ("nav h2 ");

// Selecionando a lista/Menu 

const menu = document.querySelector (".menu");

//Selecionando o link que está dentro do nav h2

const textBotao = botaoMenu.querySelector ("a");

botaoMenu.addEventListener ("click",function(event){
event.preventDefault();   
menu.classList.toggle("aberto");

// preventDefault é Anular ou prevenir o comportamento padrão do link

if(menu.classList.contains("aberto")){
    textBotao.innerHTML = "Fechar &times;";


} else {

    textBotao.innerHTML = "Menu &equiv;"
}


});



