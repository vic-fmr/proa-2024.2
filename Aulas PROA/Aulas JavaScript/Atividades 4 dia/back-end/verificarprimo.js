function verificarprimo(){
    let numero = parseFloat(document.getElementById('primo').value);

    if(numero >= 4 && (numero%2 == 0 || numero%3 == 0)){
        document.getElementById('resultadoprimo').innerText = "Não é primo!";
    } else{
        document.getElementById('resultadoprimo').innerText = "É primo!";
    
}
document.getElementById('primo').innerText = "";
}