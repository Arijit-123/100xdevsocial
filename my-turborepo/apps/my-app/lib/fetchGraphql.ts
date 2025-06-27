
import { BACKEND_URL } from "./constants";
export const fetchGraphQl=async()=>{
const response = await fetch(`${BACKEND_URL}/graphql`, {

    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
  
}
)


}