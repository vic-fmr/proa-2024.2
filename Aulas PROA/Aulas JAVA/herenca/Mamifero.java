public class Mamifero extends Animal {

    private String corPelo;

    public Mamifero(String nome, int idade, String corPelo) {
        super(nome, idade);
        this.corPelo = corPelo;
    }

    public void setCorPelo(String corPelo) {
        this.corPelo = corPelo;
    }

    public String getCorPelo() {
         return corPelo;
    }

    public void parir(){
        System.out.println(this.getNome() + " está parindo! (A não ser que seja um ornintorrinco...)");
    }
}
