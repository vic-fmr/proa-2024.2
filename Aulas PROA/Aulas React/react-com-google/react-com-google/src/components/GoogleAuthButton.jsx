import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"

export default function GoogleAuthButton( { setName, setEmail, setPicture, setIsActive}) {
  return (
    <>
      <GoogleLogin
        onSuccess={(response) => {
          const userInfo = jwtDecode(response?.credential)

          const {name, email, picture} = userInfo

          setName(name)
          setEmail(email)
          setPicture(picture)
          setIsActive(true)
        }}
      />
    </>
  );
}
