import "./App.css";
import ListAlunos from "./components/ListAlunos/ListAlunos";
import Login from "./components/Login/Login";
import { useState, useEffect } from "react";

function App() {
    const [token, setToken] = useState("");

    return (
        <>
            <Login setToken={setToken} />
            {!token ? (
                <h1>Aguardando Autorização</h1>
            ) : (
                <ListAlunos token={token} />
            )}
        </>
    );
}

export default App;
