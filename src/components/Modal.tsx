import React from "react";
import { Link } from 'react-router-dom';
import "../styles/Modal.css"


interface Props{
    isOpen:boolean,
    setIsOpen:React.Dispatch<React.SetStateAction<boolean>>
}



const Modal =({isOpen,setIsOpen}:Props)=>{
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                <button onClick={()=>setIsOpen(false)}>X</button>
                </div>
                <div className="title"><h1>Ingresa tu email para registrarte</h1></div>
                <div className="body">aqui va el email</div>
                <div className="footer">
                    <button onClick={()=>setIsOpen(false)}>cancel</button>
                    
                </div>
            </div>           
        </div>
    )
}

export default Modal;