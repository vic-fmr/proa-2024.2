public class Carro extends Veiculo{
    private String marca;
    private String cor;

    public Carro(String modelo, int ano, String marca, String cor){
        super(modelo, ano);
        this.marca = marca;
        this.cor = cor;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getMarca() {
        return marca;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public String getCor() {
        return cor;
    }

    @Override
    public void mostrarDetalhes() {
        super.mostrarDetalhes();
        System.out.println("Marca: " + marca);
        System.out.println("Cor: " + cor);
    }
    public void mostrarDetalhes(String cor){
        System.out.println("Cor: " + cor);
    }
}
