public class Main {
    public static void main(String[] args) {

        Veiculo veiculos = new Veiculo("Civic", 2010);
        Moto moto = new Moto("Civic", 2020, "Honda", "Branca");
        Carro carro  = new Carro("Civic", 2018, "Honda","Preto");

        System.out.println("\n\nMétodo original");
        veiculos.mostrarDetalhes();

        System.out.println("\n\nSobrescrita");
        System.out.println("\nDetalhes moto:");
        moto.mostrarDetalhes();

        System.out.println("\nDetalhes carro: ");
        carro.mostrarDetalhes();

        System.out.println("\n\nSobrecarga");
        System.out.println("Sobrecarga nos detalhes da moto:");
        System.out.println("\nApenas cor:");
        moto.mostrarDetalhes("Azul");
        System.out.println("\nMarca e cor: ");
        moto.mostrarDetalhes("Pop100" , "Vermelha");
    }
}