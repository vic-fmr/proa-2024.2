class Atividade {
  constructor(dataCadastro, nome, cargo, atividade, dataLimite) {
    this.dataCadastro = dataCadastro;
    this.nome = nome;
    this.cargo = cargo;
    this.atividade = atividade;
    this.dataLimite = dataLimite;
  }

  toHTML() {
    return `
      <div class="linha">
        <div class="coluna">${this.dataCadastro}</div>
        <div class="coluna">${this.nome}</div>
        <div class="coluna">${this.cargo}</div>
        <div class="coluna">${this.atividade}</div>
        <div class="coluna">${this.dataLimite}</div>
        <div class="coluna"><button type="button" onclick="tabela.removerLinha(this)">Remover</button></div>
      </div>
    `;
  }

  validarDados() {
    if (!this.nome || !this.cargo || !this.atividade || this.dataLimite == "undefined/undefined/" || this.dataLimite < this.dataCadastro) {
      return false;
    } else {
      return true;
    }
  }

}
