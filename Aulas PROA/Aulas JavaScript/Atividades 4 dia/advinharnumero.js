
function advinharnumero() {
    let numero = parseFloat(document.getElementById('numerochutado').value);
    let numeroaleatorio = 3

    if(numero == numeroaleatorio){
        document.getElementById('resultadochute').innerText = 'Acertou';
    }

}
