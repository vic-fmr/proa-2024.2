import "./App.css";
import Login from "./components/Login/Login";
import { useState, useEffect } from "react";

function App() {
    const [token, setToken] = useState("");
    return (
        <>
            <Login setToken={setToken} />
        </>
    );
}

export default App;
