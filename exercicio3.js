// Dado o array:
//const letras = ['b', 'd', 'a', 'c', 'e'];
// a) Use sort() para ordenar o array em ordem alfabética.
// b) Use reverse() para inverter a ordem do array.

//RESOLUÇÃO
 
//Letra a)
const letras = ['b', 'd', 'a', 'c', 'e'];
console.log(letras.sort(function(a,b){
    return a.localeCompare(b);
}));

//Letra b)
letras.reverse();
console.log(letras);