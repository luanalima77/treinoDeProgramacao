function mostrarTabuada(numero){
    let tabuada;
    for(i = 0; i < 11; i++){
         tabuada = numero * i;
         console.log(`${numero} * ${i} = ${tabuada}`);
    }
}

mostrarTabuada(9);
mostrarTabuada(10);