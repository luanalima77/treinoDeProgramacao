//Para um jogo, precisamos saber se um personagem morreu ou não depois de sofrer um ataque. Faça uma função que receba 2 parâmetros, 'dano' e 'saude'. A função deve retornar '1' se o dano for matar o personagem (ou seja, deixar sua saúde menor ou igual a zero) e '0' caso contrário.
//Dica - utilize a seguinte função: function personagemMorreu (dano, saude) {}
//

//Exercício retirado de: https://github.com/tiagovignatti/exercicios-javascript?tab=readme-ov-file#vari%C3%A1veis-e-fun%C3%A7%C3%B5es

//RESOLUÇÃO
function verificarPersonagem(dano, saude){
    if(dano > saude){
        console.log("O personagem morreu");
    }else{
        let saudeRestante = saude - dano;
        console.log(`O personagem ainda tem ${saudeRestante} de saúde restante`);
    }
}

verificarPersonagem(100, 200);
verificarPersonagem(200, 100);
