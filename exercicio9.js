//Colocando o vetor em ordem crescente.

let vetorNumerico = [9,5,7,3,4,2,1,0,6];

function ordenarVetor(vetor){
    return vetor.sort(function(a,b){
        return a - b;
    });
}

console.log(ordenarVetor(vetorNumerico));