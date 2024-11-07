public class Ave extends Animal {

    private double tamanhoBico;

    public Ave(String nome, int idade, double tamanhoBico) {
        super(nome, idade);
        this.tamanhoBico = tamanhoBico;
    }

    public double getTamanhoBico() {
        return tamanhoBico;
    }

    public void setTamanhoBico(double tamanhoBico) {
        this.tamanhoBico = tamanhoBico;
    }

    public void voar(){
        System.out.println(getNome() + " está voando! ... ou não..");
    }
}
