import analyzer from './analyzer.js';
const boton = document.getElementById("reset-button");
const textarea = document.querySelector('textarea[name="textarea"]')
const primerElemento= document.querySelector('li:nth-child(1)');
const segundoElemento= document.querySelector('li:nth-child(2)');
//TODO: escuchar eventos del DOM e invocar  los métodos de)');
const tercerElemento= document.querySelector('li:nth-child(3)');
const cuartoElemento= document.querySelector('li:nth-child(4)');
const quintoElemento= document.querySelector('li:nth-child(5)');
boton.addEventListener("click",function(){
    textarea.value = "";
    primerElemento.setAttribute("data-testid","0");
    segundoElemento.innerHTML="Recuento de caracteres.";
 });

 textarea.addEventListener("keyup",
 function (){
    console.log(primerElemento);
    let value= textarea.value;
    const wordCount = analyzer.getWordCount(value);
    primerElemento.setAttribute("data-testid",wordCount);
    const characterCount = analyzer.getCharacterCount(value); 
    segundoElemento.innerHTML="Recuento de caracteres. " + characterCount;
    
});
