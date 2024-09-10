// Instâncias das classes
const cadastro = new Cadastro("cadastro-overlay");
const tabela = new Tabela("tabela_gerenciamento");

// Função para fechar o modal e cadastrar uma nova atividade
function cadastrar() {
  const nome = document.getElementById("nome").value;
  const cargo = document.getElementById("cargo").value;
  const atividade = document.getElementById("atividade").value;
  const dataLimite = document.getElementById("dataLimite").value;

  var dataCadastro = tabela.buscarDataAtual();
  var dataLimiteFormatada = tabela.formatarDataComHifens(dataLimite);

  const novaAtividade = new Atividade(
    dataCadastro,
    nome,
    cargo,
    atividade,
    dataLimiteFormatada
  );

  if (novaAtividade.validarDados()) {
    tabela.adicionar(novaAtividade);
    cadastro.fechar();
  } else {
    alert("Dados Inválidos");
  }
  document.getElementById("formulario").reset(); // Limpar o formulário
}

// Função para remover uma linha da tabela
function removerLinha(botao) {
  tabela.removerLinha(botao);
}
