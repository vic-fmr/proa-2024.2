import { GoogleOAuthProvider } from "@react-oauth/google";
import { useState } from "react";
import "./App.css";
import GoogleAuthButton from "./components/GoogleAuthButton";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [picture, setPicture] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <GoogleOAuthProvider clientId="800624391230-gc49mfn5e8km4elgi0viu1t079m0hude.apps.googleusercontent.com">
        <GoogleAuthButton
        setName = {setName}
        setEmail = {setEmail}
        setPicture = {setPicture}
        setIsActive = {setIsActive}
        />
      </GoogleOAuthProvider>

      {isActive ? (
        <div>
          <img src={picture} alt="" />
          <p>{name}</p>
          <p>{email}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
