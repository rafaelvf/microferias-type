import { gql,useMutation } from "@apollo/client";


 const CREATE_EMPRENDEDOR = gql`
    mutation createEmprendedor($nombre:String!, $apellido:String!, $email:String!, $feria:String!){
        addEmprendedores(
            nombre:$nombre
            apellido:$apellido
            email:$email
            feria:$feria
    
        ){
            nombre
            apellido
            email
            feria
        }
    }
`
export default CREATE_EMPRENDEDOR