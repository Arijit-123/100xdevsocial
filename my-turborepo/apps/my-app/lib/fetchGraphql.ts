
import { BACKEND_URL } from "./constants";
export const fetchGraphQl=async(query:string)=>{
const response = await fetch(`${BACKEND_URL}/graphql`, {

    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        query,
       
    }),
}
)
const result= await response.json();
if(result.errors){
    console.error("GraphQL errors:", result.errors);
    throw new Error("Failed to fetch data from GraphQL API123");
}
return result;
}