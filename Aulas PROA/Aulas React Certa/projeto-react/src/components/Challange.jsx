import { useState } from "react";

function Calculo() {
    const [value, setValue] = useState('');

    function somar() {
        const n1 = parseInt(document.getElementById("n1").value);
        const n2 = parseInt(document.getElementById("n2").value);
        setValue(n1 + n2);
    }

    function subtrair() {
        const n1 = parseInt(document.getElementById("n1").value);
        const n2 = parseInt(document.getElementById("n2").value);
        setValue(n1 - n2);
    }
    
    function multiplicar() {
        const n1 = parseInt(document.getElementById("n1").value);
        const n2 = parseInt(document.getElementById("n2").value);
        setValue(n1 * n2);
    }
    
    function dividir() {
        const n1 = parseInt(document.getElementById("n1").value);
        const n2 = parseInt(document.getElementById("n2").value);

        if (n2 == 0) {
            setValue("Divisão por zero não permitido.");
        } else {
            setValue(n1 / n2);
        }
    }

    return (
        <div>
            <input id="n1" type="number"/>
            <input id="n2" type="number"/>
            <button id="button" onClick={somar}>Somar</button>
            <button id="button" onClick={subtrair}>Subtrair</button>
            <button id="button" onClick={multiplicar}>Multiplicar</button>
            <button id="button" onClick={dividir}>Dividir</button>

            <p id="resultado">Resultado: {value}</p>
        </div>
    );
}

export { Calculo };