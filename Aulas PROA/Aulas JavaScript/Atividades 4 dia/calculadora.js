    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

function somar(num1, num2){
    resultado = num1 + num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
    limpar();
}
function subtrair(num1,num2){
    resultado = num1 - num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
    limpar();
}
function multiplicar(num1,num2){
    resultado = num1 * num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
    limpar();
}
function dividir(num1,num2){
    resultado = num1/num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
    limpar();
}

function limpar(){
    document.getElementById('num1').value = "";
    document.getElementById('num2').value = "";
}
