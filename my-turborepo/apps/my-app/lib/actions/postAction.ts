"use server";
import { fetchGraphQl } from "../fetchGraphql";
import {print} from "graphql";
import { GET_POSTS } from "../gqlQueries";

export const fetchpostfeed = async()=>{
    try{
const data= await fetchGraphQl(print(GET_POSTS));

console.log("data", data);
   
return data;
 }catch(error){
 console.error("fetchpostfeed failed:", error);
    return [];
 }
}