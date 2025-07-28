"use server";
import { fetchGraphQl } from "../fetchGraphql";
import {print} from "graphql";
import { GET_POSTS,GET_USER_POSTS } from "../gqlQueries";

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
type PostsProps = {
  username: number;
}


export const userfetchpostfeed = async(userid:number)=>{
  console.log("useridin postactions", userid);
    try{

        const variables = {userid: Number(userid) };

const data= await fetchGraphQl(print(GET_USER_POSTS), variables);

console.log("data", data);
   
return data;
 }catch(error){
 console.error("fetchpostfeed failed:", error);
    return [];
 }
}