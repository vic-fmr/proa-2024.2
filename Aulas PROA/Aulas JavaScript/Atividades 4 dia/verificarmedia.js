function verificarmedia() {
    let num01 = parseFloat(document.getElementById("num01").value);
    let num02 = parseFloat(document.getElementById("num02").value);
    let num03 = parseFloat(document.getElementById("num03").value);
    let num04 = parseFloat(document.getElementById("num04").value);

    let media = (num01 + num02 + num03 + num04) / 4

    if (media >= 7) {
        document.getElementById("resultadomedia").innerText = 'Aprovado\n Média: ' + media;
    } else if (media >= 5) {
        document.getElementById("resultadomedia").innerText = 'Recuperação\n Média: ' + media;
    } else {
        document.getElementById("resultadomedia").innerText = 'Reprovado\n Média: ' + media;
    }
}