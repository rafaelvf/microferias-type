import { ActionTypes } from "./action-types"
import axios from "axios";
import URLrequests from "../constantes";

export const GET_FERIAS=()=>{//esta action me trae todos las ferias.
    
    return async function (dispatch:any){
        const res= await axios.get(`${URLrequests}ferias`);
    dispatch({
        type: ActionTypes.GET_FERIAS,
        payload: res.data,
    })
    }}

export const GET_FERIA=(id:(string|undefined))=>{
    
        return{
            type: ActionTypes.GET_FERIA,
            payload: id,
        }
        }

export const GET_NOMBRE=(nombre:(string|undefined))=>{
    
            return{
                type: ActionTypes.GET_NOMBRE,
                payload: nombre,
            }
            }

export const GET_DIRECCION=(direccion:(string|undefined))=>{
    
            return{
                type: ActionTypes.GET_DIRECCION,
                payload: direccion,
            }
            }

export const GET_CATEGORIA=(categoria:(string|undefined))=>{
    
            return{
                    type: ActionTypes.GET_CATEGORIA,
                    payload: categoria,
            }
            }