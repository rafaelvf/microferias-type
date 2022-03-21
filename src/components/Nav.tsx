import React from "react";
import "../styles/Nav.css"
import { Link } from 'react-router-dom';



const Nav:React.FC =()=>{

    return (
        <div className="navbar">
            
            <Link to={'/'} className='link'><h1>MicroFerias</h1></Link>
                            {/* <div className="dropdown">
                            <h5 className="dropdown__h5">Contactanos
                            <i className="fa fa-caret-down"></i>
                            </h5>
                            <div className="dropdown-content">
                                <a href="#">Link 1</a>

                                <h3 className="openModalBtn" onClick={()=> {setIsOpen(true)}}>Registrate</h3>

                                {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
                                
                                
                                <Link to={'/formulario'} className='link'>Registra una feria</Link>
                                
                            </div>
                            </div> */}

                <div className="contacto">
                <Link to={'/formulario'} className='link'><p>Registra tu feria</p></Link>
                <Link to={'/formularioEmprendimiento'} className='link'> <p>Registra tu emprendimiento</p></Link>
                <Link to={'/formularioEmail'} className='link'><p>Registra tu email</p></Link>
                    
                </div>

        </div>
    )
}

export default Nav;