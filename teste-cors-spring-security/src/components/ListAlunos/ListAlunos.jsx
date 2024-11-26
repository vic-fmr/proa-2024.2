import axios from "axios";
import { useEffect, useState } from "react";

const baseDbURL = "http://localhost:8080/alunos";

export default function ListAlunos({ token }) {
    const [alunos, setAlunos] = useState([]);
    const [requestError, setRequestError] = useState(false);

    useEffect(() => {
        if (token) {
            console.log("Token usado: " + token);
            axios
                .get(`${baseDbURL}/list`, {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then((response) => {
                    setAlunos(response.data);
                })
                .catch((error) => {
                    console.log("Erro: " + error);
                    setRequestError(true);
                });
        }
    }, [token]);

    if (!requestError) {
        return (
            <>
                <h1>Alunos: </h1>
                {alunos.map((aluno) => (
                    <div key={aluno.id}>
                        <p>Nome: {aluno.nome}</p>
                        <p>Email: {aluno.email}</p>
                    </div>
                ))}
            </>
        );
    } else {
        return (
            <>
                <h1>Dados Inválidos</h1>
            </>
        );
    }
}
