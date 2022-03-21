import React, {useState} from "react";
import "../styles/Form.css"
import PlacesAutocomplete,{
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';
import categorias from "../categorias";
import axios from "axios";
import URLrequests from "../constantes";

const Form:React.FC =()=>{

    interface Feria {
        name:string;
        date:string;
        city:string;
        image:string;
        description:string;
    }

    const [state,setState]=useState<Feria>({
        name:"",
        date:"",
        city:"",
        image:"",
        description:"",
    })

    const [categories, setCategorias]=useState<string[]>([]);

    const[address,setAdress]=useState<string>('')

    const[coordinates,setCoordinates]=useState<{}>({
        lat:null,
        lng:null
    })

    const handleSelect=async (value:any) =>{
        const results = await geocodeByAddress(value);
        const ll = await getLatLng(results[0]);
        
        setAdress(value)
        setCoordinates(ll)
    }
    console.log(coordinates,"address")

    function handleChange(e:any){
        setState(prevState=>{
            return {
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
    }
    console.log(state,"state")

    const Checked=(value:string)=>{

    const categorias:boolean=categories.some((i:string)=>i===value)
    if(!categorias){
        setCategorias([...categories,value])
    } else{
        const filter:string[]=categories.filter((i:string)=>i !== value)
        setCategorias(filter)
    }

}

    type Post1 = {
        name:String,
        date:String,
        city:String,
        image:String,
        description:String,
        categories:string[],
        address:String,
        coordinates:{}
    }

    const post1:Post1={
        name:state.name,
        date:state.date,
        city:state.city,
        image:state.image,
        description:state.description,
        categories:categories,
        address:address,
        coordinates:coordinates
        }

            

    async function handleSubmit(e:React.FormEvent){
        e.preventDefault()

        if(!state.name || !state.date || !state.city || !state.image || !state.description || !categories.length || !address ){
            alert("Por favor llenar todos los campos")
        } else{

            await axios.post(`${URLrequests}ferias`,post1)
            .then(res=>console.log(res))
            .catch(error=>{
                console.log(error)
            })
            alert("Se ha creado correctamente!")
            setState(prevState=>{
                return {
                    ...prevState,
                    name:"",
                    date:"",
                    city:"",
                    image:"",
                    description:"",
                }
            })

            setAdress("")
            setCategorias([])
        }

    }

    console.log(post1,"post1")

    return (
        <div className='form'>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit}>

                <h5>Nombre de la feria</h5>
                    <input
                        type='text'
                        placeholder="Nombre de la feria"
                        onChange={handleChange}
                        name="name"
                        value={state.name}
                    />

                <h5>Fecha</h5>
                    <input
                        type='date'
                        onChange={handleChange}
                        name="date"
                        value={state.date}
                    />

                <h5>Direccion</h5>

                <PlacesAutocomplete
                    value={address}
                    onChange={setAdress}
                    onSelect={handleSelect}>

                    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div >
                            <input
                            {...getInputProps({
                            placeholder: 'Buscar ...',
                            className: 'location-search-input',
                            })}
                            />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                            const className = suggestion.active
                            ? 'suggestion-item--active'
                            : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                            ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                            : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                            <div
                                {...getSuggestionItemProps(suggestion, {
                                className,
                                style,
                                })}
                            >
                                <span>{suggestion.description}</span>
                            </div>
                            );
                        })}
                    </div>
                </div>
                )}
                </PlacesAutocomplete>
                {/* <h5>Direccion sugerida:{address}</h5> */}

                <h5>Ciudad</h5>
                    <input
                        type='text'
                        onChange={handleChange}
                        name="city"
                        value={state.city}
                    />

                <h5>Imagen del evento</h5>
                    <input 
                        type='file'
                        onChange={handleChange}
                        name="image"
                        value={state.image}
                        className='input__file'
                    />

                <h5>Categoria</h5>
                <div className="categorias">
                    {categorias.map((i:string)=>(
                        <div className="categorias_check">
                        <input 
                            type="checkbox"
                            onChange={(e)=>Checked(e.target.value)}
                            name="categories"
                            value={i}
                            key="categorias"
                            className="categorias_input"
                        />
                        
                        {i}
                        </div>
                    )

                    )}
                </div>


                <h5>Descripcion</h5>
                    <textarea 
                        placeholder='Describe la feria...'
                        onChange={handleChange}
                        name="description"
                        value={state.description}
                        className='textarea'
                    />

                <button className="boton_form">
                    <p>Enviar</p>
                </button>
            </form>
        </div>
    )
}

export default Form;