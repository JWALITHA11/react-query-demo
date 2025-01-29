// import React from "react";
// import { useQuery} from "@tanstack/react-query";
// import { Todo } from './useFetch';
// import { useTodos } from "./Fetch";
// //creating fetch function
//  export const Evendata = async () =>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
//     if(!response.ok){
//         throw new Error("loading failed");
//     }
//     const output = await response.json();
//     const evendatalist = output.filter((ele:Todo)=>ele.id % 2 ===0)
//     return evendatalist;
// };

// const EvenFetching : React.FC = () =>{
//     const{data,error,isLoading} = useTodos();
//     if(isLoading)
//         return <div>Loading...</div>
//     if(error)
//         return <div>Error !!(error.message)</div>
//     return(
//         <>
//         <ul>
//         {data?.map((ele:Todo)=>(
//             <li key = {ele.id}>ID : {ele.id}
//             <p>Title : {ele.title}</p>
//         <p>Completed : {ele.completed ? "yes" : "no"}</p>
//             </li>
   
//         ))}
//           </ul>
        
        
//         </>
//     )
// }

// export default EvenFetching;