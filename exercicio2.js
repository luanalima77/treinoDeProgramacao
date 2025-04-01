// Dado o array:
//let numeros = [10, 20, 30, 40, 50];

// a) Use filter() para criar um novo array com números maiores que 25.
// b) Use reduce() para calcular a soma de todos os números.
// c) Use map() para multiplicar cada número por 2.

//RESOLUÇÃO

//Letra a)
let numeros = [10, 20, 30, 40, 50];
console.log(numeros.filter(function(numero){
    if(numero > 25){
        return numero;
    }
}));


//Letra b)
console.log(numeros.reduce(function(n1, n2){
    return n1 + n2;
}));

//Letra c)
console.log(numeros.map(function(n1){
    return n1*2;
}))