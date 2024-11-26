import java.util.ArrayList;
import java.util.List;

public class LivroLista {
    private String titulo;
    private int anoDePublicacao;
    private List<String> autores;
    private List<String> capitulos;

    public LivroLista(String titulo, int anoDePublicacao) {
        this.titulo = titulo;
        this.anoDePublicacao = anoDePublicacao;
        this.autores = new ArrayList<>();
        this.capitulos = new ArrayList<>();
    }

    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public int getAnoDePublicacao() {
        return anoDePublicacao;
    }
    public void setAnoDePublicacao(int anoDePublicacao) {
        this.anoDePublicacao = anoDePublicacao;
    }

    public void addAutor(String autor) {
        if(autor != null && !autor.isEmpty()){
            autores.add(autor);
        } else {
            System.out.println("Erro: Autor não preenchido");
        }
    }
    public List<String> getAutores() {
        return autores;
    }

    public void addCapitulo(String capitulo) {
        if(capitulo != null && !capitulo.isEmpty()){
            capitulos.add(capitulo);
        }else {
            System.out.println("Erro: Capitulo não preenchido");
        }
    }
    public List<String> getCapitulos() {
        return capitulos;
    }
    public void exibirInformacoes() {
        System.out.println("Título: " + titulo);
        System.out.println("Ano de Publicação: " + anoDePublicacao);
        System.out.println("Autores: " + String.join(", ", autores));
        System.out.println("Capítulos: " + String.join(", ", capitulos));
    }
    public static void main(String[] args) {
        LivroLista livro = new LivroLista("Aprendendo Java", 2024);

        livro.addAutor("");
        livro.addCapitulo("");

        livro.addAutor("João Silva");
        livro.addAutor("Maria Oliveira");
        livro.addCapitulo("Introdução");
        livro.addCapitulo("Agradecimentos");

        livro.exibirInformacoes();
    }
}


