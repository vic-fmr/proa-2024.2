
function advinharnumero() {
    let numero = parseFloat(document.getElementById('numerochutado').value);
    let numeroaleatorio = 3

    if(numero == numeroaleatorio){
        document.getElementById('resultadochute').innerText = 'Acertou';
    } else if(numero < numeroaleatorio){
        document.getElementById('resultadochute').innerText = 'Ainda não, mais que isso!';
    } else{
        document.getElementById('resultadochute').innerText = 'Ainda não, menos que isso!';
    }

}
