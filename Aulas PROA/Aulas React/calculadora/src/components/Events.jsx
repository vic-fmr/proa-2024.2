import { useState } from "react";

function ClickButton(){
    function handleClick(){
        alert('O botão foi clicado!');
    }

    return <button onClick={handleClick}>Click me</button>
}

function InputField(){
    const [value, setValue] = useState('')

    function handleChange(event){
        setValue(event.target.value);
    }

    return(
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <p>Voce Digitou: {value}</p>
        </div>
    )
}

function KeyDownComponent(){
    function handleKeyDown(event){
        console.log(`Key pressed: ${event.key}`)
    }

    return <input type="text" onKeyDown={handleKeyDown}/>
}

function FocusBlurComponent(){
    function handleFocus(){
        console.log ('Input focused');
    }

    function handleBlur(){
        console.log('Input lost focus')
    }

    return <input type="text" onFocus={handleFocus} onBlur={handleBlur}/>
}

function HoverComponent(){
    function handleMouseEnter(){
        console.log("Mouse entrou na div")
    }
    function handlerMouseOut(){
        console.log("Mouse saiu da div")
    }

    return <div onMouseEnter={handleMouseEnter} onMouseLeave={handlerMouseOut}>
        Passe o Mouse Aqui
    </div>
}
export {ClickButton, InputField, KeyDownComponent, FocusBlurComponent, HoverComponent};