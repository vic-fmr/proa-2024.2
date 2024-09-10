class Tabela {
    constructor(id) {
      
      this.tabela = document.getElementById(id);
    }
  
    adicionar(atividade) {
      this.tabela.innerHTML += atividade.toHTML();
    }
  
    removerLinha(botao) {
      botao.parentNode.parentNode.remove();
    }
    
    buscarDataAtual(){
      var dataAtual = new Date();
      var dia = String(dataAtual.getDate()).padStart(2, "0");
      var mes = String(dataAtual.getMonth() + 1).padStart(2, "0"); // Janeiro é 0
      var ano = dataAtual.getFullYear();
  
      return dia +"/" + mes + "/" + ano;
    }
    
    formatarDataComHifens(data) {
      const partes = data.split("-");
      return partes[2]+"/"+partes[1]+"/"+partes[0];
    }

    formatarDataComPontos(data) {
      const partes = data.split(".");
      return partes[2]+"/"+partes[1]+"/"+partes[0];
    }

  }

  