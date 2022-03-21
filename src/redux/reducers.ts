import { ActionTypes } from "./action-types"

const initialState:{feriasOriginal:[],ferias:[],feria:[]} ={
    feriasOriginal:[],
    ferias:[],
    feria:[]
}

export const reducer = (state=initialState,action:any)=>{
    
    switch(action.type){
        
        case ActionTypes.GET_FERIAS:
            return{...state,
                feriasOriginal:action.payload,
                ferias:action.payload,//eesta la que va cambiando
                // everyCountry:action.payload//esta es la que no tengo que modificar
            } 
        
        case ActionTypes.GET_FERIA:

            const feriaFiltrada = state.ferias.filter((i:any)=>i._id===action.payload)
            
            return{...state,
                    feria:feriaFiltrada

            }
            

        case ActionTypes.GET_NOMBRE:                

            const nombre = state.feriasOriginal.filter((i:any)=>i.name.toLowerCase().includes(action.payload.toLowerCase()))

            return{...state,
                    ferias:nombre
                                
                    }
                
        case ActionTypes.GET_DIRECCION:                

            const dire = state.feriasOriginal.filter((i:any)=>i.address.toLowerCase().includes(action.payload.toLowerCase()))
        
            return{...state,
                    ferias:dire
                                        
                    }

                    
        case ActionTypes.GET_CATEGORIA:      
                    
                console.log(action.payload,":")
        const siIncluyen = state.feriasOriginal.filter((i:any)=>i.categories.includes(action.payload))
                
                
        return{...state,
                ferias:siIncluyen
                                                
                }

        default:
            return state;
    }
}
