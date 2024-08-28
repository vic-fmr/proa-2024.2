function verificarcaracteres(){
    const palavra = document.getElementById('palavra').value;
    const caracteresespeciais = "!@#$%^&*()_-+=[]{}|;:',`á.<>?/~\\"
    let quantcaracterespecial = 0;
    let listcaracterespecial = [];

    for(caractere of palavra){
        for(char of caracteresespeciais){
            if(caractere == char){
                quantcaracterespecial++;
                listcaracterespecial.push(caractere);
            }
        }
    }
    document.getElementById('resultadocaracteres').innerText = 'Caractéres especiais: ' + listcaracterespecial + '\n' + 'Quantidade: ' + quantcaracterespecial;
}
