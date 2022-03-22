import React from "react";
import "../styles/Nav.css"
import { Link } from 'react-router-dom';
import { GET_FERIAS } from "../redux/actions";
import { useDispatch } from "react-redux";

const Nav:React.FC =()=>{
    const dispatch=useDispatch()
    
    function handleClick(){
        dispatch(GET_FERIAS())
    }

    return (
        <div className="navbar">
            
            <Link to={'/'} className='link'><h1 onClick={handleClick}>MicroFerias</h1></Link>
                            
                <div className="contacto">
                <Link to={'/formulario'} className='link'><p>Registra tu feria</p></Link>
                <Link to={'/formularioEmprendimiento'} className='link'> <p>Registra tu emprendimiento</p></Link>
                <Link to={'/formularioEmail'} className='link'><p>Registra tu email</p></Link>
                    
                </div>

        </div>
    )
}

export default Nav;