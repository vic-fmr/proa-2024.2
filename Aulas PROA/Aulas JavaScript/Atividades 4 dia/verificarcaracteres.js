function verificarcaracteres(){
    const palavra = document.getElementById('palavra').ariaValueMax
    const caracteresespeciais = "!@#$%^&*()_-+=[]{}|;:',.<>?/~\\"
    let quantcaracterespecial = 0
    let listcaracterespecial = [];

    for(caractere of palavra){
        for(char of caracteresespeciais){
            if(caractere == char){
                quantcaracterespecial++;
                listcaracterespecial.push(caractere)
            }
        }
    }
    doc
}