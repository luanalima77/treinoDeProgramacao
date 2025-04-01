// Dado o array:
//const frutas = ['maçã', 'banana', 'laranja', 'uva', 'pera'];
// a) Use splice() para remover 'laranja' e 'uva' e substituí-las por 'melancia' e 'abacaxi'.
// b) Use join() para transformar o array em uma string separada por " - ".
// c) Use push() para adicionar 'kiwi' no final e pop() para remover o último elemento.
// d) Use unshift() para adicionar 'morango' no início e shift() para remover o primeiro elemento.

//RESOLUÇÃO:
//Letra a)
let frutas = ['maçã', 'banana', 'laranja', 'uva', 'pera'];
frutas.splice(2, 2,"melancia", "abacaxi");
console.log(frutas);

//Letra b)
let frutasComTracinho = frutas.join("-")
console.log(frutasComTracinho);

//Letra c)
frutas.pop();
frutas.push("kiwi");
console.log(frutas);

//Letra d)
frutas.shift();
frutas.unshift("morango");
console.log(frutas);


