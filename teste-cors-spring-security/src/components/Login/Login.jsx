import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import "./Login.css";
const baseAuthURL = "http://localhost:8080/auth/";

export default function Login(setToken) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function getToken() {
        axios
            .post(`${baseAuthURL}login`, {
                email: email,
                password: senha,
            })
            .then((response) => {
                setToken(response.data.token);
            })
            .catch((error) => setToken(`Erro: ${error}`));
    }

    return (
        <div className="login-container">
            <h1>Teste de Login</h1>
            <label>Email</label>
            <input
                type="text"
                placeholder="Insira seu email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <label>Senha</label>
            <input
                type="text"
                placeholder="Insira sua senha"
                onChange={(e) => setSenha(e.target.value)}
            />
            <button onClick={getToken}>Enviar</button>
            <br />
            <p>{token}</p>
        </div>
    );
}
