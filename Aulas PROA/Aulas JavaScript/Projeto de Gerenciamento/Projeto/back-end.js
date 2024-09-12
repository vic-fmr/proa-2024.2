// Instâncias das classes
const cadastro = new Cadastro("cadastro-overlay");
const tabela = new Tabela("tabela_gerenciamento");

// Função para fechar o modal e cadastrar uma nova atividade
function cadastrar() {
  const nomeInput = document.getElementById("nome");
  const cargoInput = document.getElementById("cargo");
  const atividadeInput = document.getElementById("atividade");
  const dataLimiteInput = document.getElementById("dataLimite");

  const nome = nomeInput.value;
  const cargo = cargoInput.value;
  const atividade = atividadeInput.value;
  const dataLimite = dataLimiteInput.value;

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
    if(!nome){
      nomeInput.style.boxShadow = "0px 0px 10px red";
    }
    if(!atividade){
      atividadeInput.style.border = "2px solid red"
    }
    if(!dataLimite){
      dataLimiteInput.style.border = "2px solid red"
    }
  }
  document.getElementById("formulario").reset(); // Limpar o formulário
}

// Função para remover uma linha da tabela
function removerLinha(botao) {
  tabela.removerLinha(botao);
}
