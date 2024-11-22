public class MediaAluno {
    private String nome;
    private double nota1;
    private double nota2;
    private double nota3;


    public MediaAluno(String nome, double nota1, double nota2, double nota3) {
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }

    public void calcularMedia() {
        double media = (this.nota1 + this.nota2 + this.nota3) / 3;
        String status = "";

        if(media < 4){
            status = "Reprovado";
        } else if(media >= 4 && media < 7){
            status = "Em recuperação";
        }
        else{
            status = "Aprovado";
        }

        System.out.println("Aluno: " + nome);
        System.out.println("Média: " + media);
        System.out.println("Status: " + status);
    }
}
