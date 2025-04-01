//Precisamos limitar as posições em que um inimigo pode andar na tela. A menor posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que 0 sairia fora da tela. Precisamos de uma função LimitaPosicao que recebe uma POSICAO que pode ter qualquer valor positivo ou negativo, verifica se ela é válida ou não e retorna sempre um valor corrigido entre 0 e 100.

//Exercício retirado de: https://github.com/tiagovignatti/exercicios-javascript?tab=readme-ov-file#vari%C3%A1veis-e-fun%C3%A7%C3%B5es

//RESOLUÇÃO
function limitarPosicao(posicao){
    switch(posicao){
        case 100:
            console.log("Maior posição possível atingida!");
            break;
        case 0:
            console.log("Menor posição possível atingida!");
            break;
    }

    if(posicao >= 0 && posicao <= 100){
        console.log("O personagem está dentro da tela!")
    }else{
         console.log("Personagem fora da tela!");
    }
}

limitarPosicao(100);
limitarPosicao(0);
limitarPosicao(50);
limitarPosicao(-50);