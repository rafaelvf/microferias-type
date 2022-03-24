import React from "react";
import "../styles/Nav.css"
import { Link } from 'react-router-dom';
import { GET_FERIAS } from "../redux/actions";
import { useDispatch } from "react-redux";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

const Nav:React.FC =()=>{
    const dispatch=useDispatch()
    
    function handleClick(){
        dispatch(GET_FERIAS())
    }

    const [sidebar, setSidebar] = React.useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <div className="navbar">
            
                <Link to={'/'} className='link'><h1     onClick={handleClick}>MicroFerias</h1></    Link>
                            
                <div className="contacto">
                <Link to={'/formulario'} className='link'><p>Registra tu feria</p></Link>
                <Link to={'/formularioEmprendimiento'} className='link'> <p>Registra tu emprendimiento</p></Link>
                <Link to={'/formularioEmail'} className='link'><p>Registra tu email</p></Link>                    
                </div>
                
                <Link to='#' className="menu-bars">
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>

                

        </div>
        <div className="barra">
            <nav className={sidebar? 'nav-menu active': 'nav-menu' }>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to={'/formulario'}    className='link'><span>Registra tu feria</span></Link>
                        </li>
                        <li className="nav-text">
                            <Link to={'/formularioEmprendimiento'}  className='link'> <span>Registra tu emprendimiento</span></Link>
                        </li>
                        <li className="nav-text">
                            <Link to={'/formularioEmail'}   className='link'><span>Registra tu email</span></Link>
                        </li>
                    </ul>
                </nav>
        </div>
        </>
    )
}

export default Nav;