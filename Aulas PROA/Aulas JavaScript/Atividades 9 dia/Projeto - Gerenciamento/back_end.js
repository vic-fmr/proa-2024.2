function abrirModal() {
  const modal = document.getElementById("modal-overlay");
  modal.style.display = "flex";
  setTimeout(() => {
    modal.classList.add("show");
  }, 10);
}

function fecharModal() {
  const modal = document.getElementById("modal-overlay");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
}

function cadastrar() {
  // Pega a data atual
  var dataAtual = new Date();
  var dia = String(dataAtual.getDate()).padStart(2, "0");
  var mes = String(dataAtual.getMonth() + 1).padStart(2, "0"); // Janeiro é 0
  var ano = dataAtual.getFullYear();
  var dataCadastro = `${ano}-${mes}-${dia}`; // Formato para input date (aaaa-mm-dd)

  var nome = document.getElementById("nome").value;
  var cargo = document.getElementById("cargo").value;
  var atividade = document.getElementById("atividade").value;
  var dataLimite = document.getElementById("dataLimite").value;

  if (!nome || !cargo || !atividade || !dataLimite) {
    alert("Preencha todos os campos.");
    return;
  }

  // Função para formatar a data para dd/mm/aaaa
  function formatarData(data) {
    const partes = data.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }

  var dataCadastroFormatada = formatarData(dataCadastro);
  var dataLimiteFormatada = formatarData(dataLimite);

  var novaLinha = document.createElement("div");
  novaLinha.classList.add("linha");

  novaLinha.innerHTML = `
<div class="coluna">${dataCadastroFormatada}</div>
<div class="coluna">${nome}</div>
<div class="coluna">${cargo}</div>
<div class="coluna">${atividade}</div>
<div class="coluna">${dataLimiteFormatada}</div>
<div class="coluna"><button type="button" onclick="removerLinha(this)">Remover</button></div>
`;

  document.getElementById("tabela_gerenciamento").appendChild(novaLinha);

  document.getElementById("formulario").reset();
  fecharModal();
}

function removerLinha(botao) {
  botao.parentNode.parentNode.remove();
}
