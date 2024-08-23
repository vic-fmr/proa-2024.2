function calcTabuada(num){
    for(let x = 1; x <= 10; x++){
        resultado = x * num;
        console.log('tabuada do numero '+ num + ': ' + x + ' * '+ num + ' = ' + resultado);
    }
    return 'Acabou'
}

console.log(calcTabuada(3))