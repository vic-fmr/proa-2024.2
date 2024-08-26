

function somar(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    resultado = num1 + num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
    limpar();
}
function subtrair(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    resultado = num1 - num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
    limpar();
}
function multiplicar(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    resultado = num1 * num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
    limpar();
}
function dividir(){
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    resultado = num1/num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
    limpar();
}

function limpar(){
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}
