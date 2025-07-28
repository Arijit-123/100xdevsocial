

import { BACKEND_URL } from "./constants";
export const fetchGraphQl=async(query:string, variables:{userid?:number| null}={})=>{

  console.log("userid in fetchgrahql", variables?.userid);
    console.log("query here", query);
let response: Response;
  if(variables?.userid != null){


    console.log("in the if block");
      var userid_new=variables?.userid
     response = await fetch(`${BACKEND_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });
  }else{

    console.log("in the else block");
     response = await fetch(`${BACKEND_URL}/graphql`, {

    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        query,
       
    }),
}
    
)

  }


const result= await response.json();

if(result.errors){
    console.error("GraphQL errors:", result.errors);
    throw new Error("Failed to fetch data from GraphQL API123");
}
return result;
}