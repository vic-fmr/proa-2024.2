let pessoa = {
    nome: 'Carlos',
    idade: 30,
    profissao: 'Desenvolvedor',
    saudacao: function(){
        console.log('Olá, meu nome é ' + this.nome)
    }
}

pessoa.saudacao();

let outraPessoa = {
    nome: 'Ana',
    idade: 35,
    saudacao: pessoa.saudacao
};

outraPessoa.saudacao();