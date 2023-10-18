import analyzer from "./analyzer.js";
const boton = document.getElementById("reset-button");
const textarea = document.querySelector('textarea[name="user-input"]');
const primerElemento = document.querySelector("li:nth-child(1)");
const segundoElemento = document.querySelector("li:nth-child(2)");
//TODO: escuchar eventos del DOM e invocar  los métodos de)');
const tercerElemento = document.querySelector("li:nth-child(3)");
const cuartoElemento = document.querySelector("li:nth-child(4)");
const quintoElemento = document.querySelector("li:nth-child(5)");
const sextoElemento = document.querySelector("li:nth-child(6)");
boton.addEventListener("click", function () {
  textarea.value = "";
  primerElemento.innerHTML = "Recuento de palabras:0";
  segundoElemento.innerHTML = "Recuento de caracteres:0";
  tercerElemento.innerHTML = "Caracteres sin espacios y signos:0";
  cuartoElemento.innerHTML = "Longitud media de las palabras:0";
  quintoElemento.innerHTML = "Recuento de numeros:0";
  sextoElemento.innerHTML = "Suma de numeros:0";
});
textarea.addEventListener("input", (funcion) => {
  const text = funcion.target.value;
  primerElemento.innerHTML =
    "Recuento de palabras: " + analyzer.getWordCount(text);
  segundoElemento.innerHTML =
    "Recuento de caracteres: " + analyzer.getCharacterCount(text);
  tercerElemento.innerHTML =
    "Caracteres sin espacios y signos: " +
    analyzer.getCharacterCountExcludingSpaces(text);
  cuartoElemento.innerHTML =
    "Longitud media de las palabras: " + analyzer.getAverageWordLength(text);
  quintoElemento.innerHTML =
    "Recuento de numeros: " + analyzer.getNumberCount(text);
  sextoElemento.innerHTML = "Suma de numeros: " + analyzer.getNumberSum(text);
});
