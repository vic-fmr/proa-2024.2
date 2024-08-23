function somar(){
    return 2+3
}

console.log(somar());



function soma(valor1, valor2){
    return valor1 + valor2;
}

console.log(soma(3,5))

function fruta(fruta){
    let text = "";
    if(fruta == 'abacaxi'){
        text = 'Abacaxi é um fruto doce'
    } else if(fruta == 'limao'){
        text = 'Limão é um fruto azedo'
    }
    return text
}

console.log(fruta('limao'))

function getSizes(alt, lar, com){
    let area = alt*lar
    let volume = alt*lar*com
    let sizes = [area, volume]
    return sizes
}
console.log(getSizes(3,3,2))
console.log(getSizes(3,3,2)[0])
console.log(getSizes(3,3,2)[1])
