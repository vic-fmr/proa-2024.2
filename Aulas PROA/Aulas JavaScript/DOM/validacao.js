function validacoes(){
    validarNome();
    validarEmail();
}

function validarNome(){
    let nomeObjeto = document.getElementById('nome');
    let nomeValor = nomeObjeto.value;
    if(nomeValor.length == 0){
        nomeObjeto.style.border = '2px solid red';
        document.getElementById('nomeinvalido').display = 'block';
        
    } else{
        alert('Toma teu nome bença: ' + nomeValor)
        nomeObjeto.style.border = '2px solid green';
    }
    
}

function validarEmail(){
    let emailObjeto = document.getElementById('email');
    let emailValor = emailObjeto.value;
    if(emailValor.length == 0){
        emailObjeto.style.border = '2px solid red';
        document.getElementById('emailinvalido').display = 'block';
        
    } else{
        emailObjeto.style.border = '2px solid green';
    }
}

