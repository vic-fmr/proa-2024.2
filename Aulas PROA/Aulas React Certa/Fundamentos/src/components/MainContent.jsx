import { useState } from "react";

function SimpleForm() {
    // Definindo o estado para armazenar o valor do campo de entrada
    const [name, setName] = useState('');

    
    // Função que será chamada sempre que o valor do input mudar
    const handleInputChange = (event) => {
      setName(event.target.value); // Atualiza o estado com o valor do input
    };
   
    // Função chamada quando o formulário for submetido
    const handleSubmit = (event) => {
      event.preventDefault(); // Evita o comportamento padrão de recarregar a página
      if(name == ""){
        alert("Insira um nome")
      }else{
      alert(`Nome submetido: ${name}`);
      }
    }
    ;
   
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={name} onChange={handleInputChange} />
        </label>
        <button type="submit">Enviar</button>
      </form>
    );
  }

  export default SimpleForm