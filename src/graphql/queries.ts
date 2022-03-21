import { gql,useQuery } from "@apollo/client";

export const query = gql`
query{
    allConsumidores {
        email
    }
    }
`

export const query2 = gql `{
    allFerias {
      address
     categories
     city
   date
   description
   id
   image
   name  
    }
   }
   `