class Tabela {
    constructor(id) {
      this.tabela = document.getElementById(id);
    }
  
    adicionar(atividade) {
      this.tabela.innerHTML += atividade.toHTML();
    }
  
    removerLinha(botao) {
      botao.parentNode.remove();
    }
  }
  
  // Instâncias das classes
  const modal = new Modal("modal-overlay");
  const tabela = new Tabela("tabela_gerenciamento");
  
  // Função para abrir o modal
  function abrirModal() {
    modal.abrir();
  }
  
  // Função para fechar o modal e cadastrar uma nova atividade
  function cadastrar() {
    var dataAtual = new Date();
    var dia = String(dataAtual.getDate()).padStart(2, '0');
    var mes = String(dataAtual.getMonth() + 1).padStart(2, '0'); // Janeiro é 0
    var ano = dataAtual.getFullYear();
    var dataCadastro = `${ano}-${mes}-${dia}`;

    function formatarData(data) {
      const partes = data.split("-");
      return `${partes[2]}/${partes[1]}/${partes[0]}`;
    }
  
    var dataCadastroFormatada = formatarData(dataCadastro);
    


    const nome = document.getElementById("nome").value;
    const cargo = document.getElementById("cargo").value;
    const atividade = document.getElementById("atividade").value;
    const dataLimite = document.getElementById("dataLimite").value;
    var dataLimiteFormatada = formatarData(dataLimite);
  
    const novaAtividade = new Atividade(dataCadastroFormatada, nome, cargo, atividade, dataLimiteFormatada);
    tabela.adicionar(novaAtividade);
  
    modal.fechar(); // Fechar o modal
    document.getElementById("formulario").reset(); // Limpar o formulário
  }
  
  // Função para remover uma linha da tabela
  function removerLinha(botao) {
    tabela.removerLinha(botao);
  }
  