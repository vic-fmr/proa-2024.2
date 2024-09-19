import { useState } from "react";

function Calculo() {
    const [value, setValue] = useState('');
    const [n1, setN1] = useState('')
    const [n2, setN2] = useState('')

    function isEmpty() {
        return n1.length === 0 || n2.length === 0;
    }

    function somar() {
        if(!isEmpty()){
        setValue(n1 + n2);}
        else{
            alert("Digite um valor")
        }
    }

    function subtrair() {
        setValue(n1 - n2);
    }
    
    function multiplicar() {
        setValue(n1 * n2);
    }
    
    function dividir() {

        if (n2 == 0) {
            setValue("Divisão por zero não permitido.");
        } else {
            setValue(n1 / n2);
        }
    }

    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <input id="n1" type="number" onChange={(e) =>{setN1(Number(e.target.value))}}/>
            <input id="n2" type="number" onChange={(e) =>{setN2(Number(e.target.value))}}/>
            <button id="button" onClick={somar}>Somar</button>
            <button id="button" onClick={subtrair}>Subtrair</button>
            <button id="button" onClick={multiplicar}>Multiplicar</button>
            <button id="button" onClick={dividir}>Dividir</button>

            <p id="resultado">Resultado: {value}</p>
        </div>
    );
}

export { Calculo };