class Modal {
  constructor(id) {
    this.modal = document.getElementById(id);
  }

  abrir() {
    this.modal.style.display = "flex";
    setTimeout(() => {
      this.modal.classList.add("show");
    }, 10);
  }

  fechar() {
    this.modal.classList.remove("show");
    setTimeout(() => {
      this.modal.style.display = "none";
    }, 300);
  }
}
