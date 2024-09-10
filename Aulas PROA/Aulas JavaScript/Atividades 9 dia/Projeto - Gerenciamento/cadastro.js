class Cadastro {
  constructor(id) {
    this.cadastro = document.getElementById(id);
  }

  abrir() {
    this.cadastro.style.display = "flex";
    setTimeout(() => {
      this.cadastro.classList.add("show");
    }, 10);
  }

  fechar() {
    this.cadastro.classList.remove("show");
    setTimeout(() => {
      this.cadastro.style.display = "none";
    }, 300);
  }
}
