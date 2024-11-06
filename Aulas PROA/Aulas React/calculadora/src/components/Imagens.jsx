import React from "react"

function Imagens(){
    const urlDaImagem = "https://fastly.picsum.photos/id/220/200/300.jpg?hmac=XQWeukbBSi6WSlgZllfOJjG8AQQXS9dYI8IqvKpE1ss"
    return(
        <>
        <img src={urlDaImagem} alt="Foto Aleatória" />
        </>
    )
}

export default Imagens