const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const listaDePalabras = text.split(" ");
    const cantidadDePalabras = listaDePalabras.length;
    return cantidadDePalabras;
  },
  getCharacterCount: (text) => {
    const cantidadCaracter = text.length;
    return cantidadCaracter;
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  },
  getCharacterCountExcludingSpaces: (text) => {
    const noEspacios = text.replace(/\s+/g, "").replace(/[^a-zA-Z0-9]/g, "");
    return noEspacios.length;
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  },
  getAverageWordLength: (text) => {
    const palabra = text
      .split(" ")
      .filter((word) => isNaN(word) && word.trim() !== "");
    let sumaDeLongitudes = 0;
    let total = 0;
    for (let i = 0; i < palabra.length; i++) {
      const palabras = palabra[i];
      sumaDeLongitudes = sumaDeLongitudes + palabras.length;
    }
    total = Number((sumaDeLongitudes / palabra.length).toFixed(2));
    return total;
  },
  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getNumberCount: (text) => {
    const texto = text.match(/\b\d+(\.\d+)?\b/g);
    if (texto === null) {
      return 0;
    }
    const numero = texto.filter((num) => !isNaN(num));
    return numero.length;
  },
  getNumberSum: (text) => {
    const numero = text.match(/\b\d+(\.\d+)?\b/g);

    let suma = 0;
    if (numero) {
      for (let i = 0; i < numero.length; i++) {
        suma += parseFloat(numero[i]);
      }

      return suma;
    } else return 0;
  },
};
//TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string' }
export default analyzer;
