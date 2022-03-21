import React, {useState} from "react";
import "../styles/FormEmprendimiento.css"
import axios from "axios";
import URLrequests from "../constantes";
import { useSelector } from "react-redux";

const FormEmprendimiento:React.FC =()=>{

    interface Emp {
        nombre:string,
        apellido:string,
        feria:string,
        email:string
    }

    const [emprendedor,setEmprendedor]=useState<Emp>(
        {
        nombre:"",
        apellido:"",
        feria:"",
        email:""
    })

    const {feriasOriginal}=useSelector((state:any)=>state.allFerias)

    function handleChange(event:any){
        setEmprendedor(prevEmprendedor=>{
            return{
                ...prevEmprendedor,
                [event.target.name]:event.target.value
            }
        })
    }
    
   async function handleSubmit(e:any){
        e.preventDefault()

        if(!emprendedor.nombre || !emprendedor.apellido || !emprendedor.feria || !emprendedor.email){
            alert("Por favor llenar todos los campos")
        }else{

            await axios.post(`${URLrequests}emprendedores`,emprendedor)
            .then(res=>console.log(res))
            .catch(error=>{
                console.log(error)
            });
            alert("Se ha creado correctamente!")
            setEmprendedor(prevEmprendedor=>{
                return{
                        ...prevEmprendedor,
                        nombre:"",
                        apellido:"",
                        feria:"",
                        email:""
                }
            })
        }

    }

    console.log(emprendedor,"state")
    return (
        <div className='formEmprendimiento'>
            <h1>Formulario</h1>

            <form onSubmit={handleSubmit}>

                <h5>Nombre</h5>
                    <input 
                    type='text'
                    placeholder="Nombre"
                    onChange={handleChange}
                    name="nombre"
                    value={emprendedor.nombre}
                    />

                <h5>Apellido</h5>
                    <input 
                    type='text'
                    placeholder="Apellido"
                    onChange={handleChange}
                    name="apellido"
                    value={emprendedor.apellido}
                    />

                <h5>Email</h5>
                    <input
                        type='text'
                        placeholder="Email"
                        onChange={handleChange}
                        name="email"
                        value={emprendedor.email}
                    />
                <h5>Nombre de la feria que te gustaria estar</h5>

                    <select name="feria" onChange={handleChange} className="select_form">
                        <option selected></option>
                        {feriasOriginal.map((i:any)=><option
                        value={i.name}
                        >{i.name}</option>)}
                    </select>
                    {/* <input 
                    type='text'
                        placeholder="Feria"
                        onChange={handleChange}
                        name="feria"
                        value={emprendedor.feria}
                    />*/}
                <button>
                    <p>Enviar</p>
                </button> 
                {/* el default type del boton adentro de un form es submit  */}
            </form>
        </div>
    )
}

export default FormEmprendimiento;