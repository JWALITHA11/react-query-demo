// // import useFetch from "./useFetch";
// import React from 'react';
import { useQuery } from "@tanstack/react-query";

// import { UNSAFE_getSingleFetchDataStrategy } from "react-router-dom";

// import { Todo } from './useFetch';
// import { Evendata } from './EvenFetching';
// // const Fetch : React.FC = () =>{
// //     const [data] = useFetch('https://jsonplaceholder.typicode.com/todos/')
// //     return(
// //         <>>
// //         <ul>
// // {data.map((ele:Todos,index) =>(

// //     <li key={index}>{ele.title}</li>
// // ))}</ul>
// //         </>
// //     )
// // }
    
// // export default Fetch ;





// //fetch function
// const fetchTodos = async (): Promise<Todo[]> => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };
// //useQuery custom hook
// export const useTodos = () => {
//   return useQuery<Todo[]>({
//     queryKey: ['todos','todoId'],
//     // queryFn: fetchTodos,
//     queryFn:({queryKey}) =>Evendata(queryKey[1]),
//   });
// };

// const Fetch: React.FC = () => {
//   const { data, error, isLoading } = useTodos();

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <ol>
//       {data?.map((todo: Todo) => (
//         <li key={todo.id}>
//             <p>ID : {todo.id}</p>
//             <p>Title : {todo.title}</p>
//             <p>Completed : {todo.completed ? "Yes" : "No"}</p>
//     </li>
//       ))}
//     </ol>
//   );
// };

// export default Fetch;

const POSTS = [{ID:1 ,TITLE:"JOHN"},{ID:2 , TITLE:"SANDRA"}]

const Fetch :React.FC = () =>{
  const postQuery = useQuery({
    queryKey:["posts"],
    //queryFn:() =>wait(3000).then(()=>[...POSTS])
    queryFn:async () =>{
      await new Promise(resolve =>{setTimeout(resolve,3000)});
      return [...POSTS]
    }
  })
  if(postQuery.isLoading)
    return <h1>Loading for the users... </h1>
  if(postQuery.error)
    return <h1>{JSON.stringify(postQuery.error)}</h1>
return(
  <>
  <div>
    {postQuery.data ? (
    postQuery.data.map(post =>(
      <div key={post.ID}>{post.ID}. {post.TITLE}</div>
    ))
  ):(
    <h1>No data Available</h1>
  )}

  </div>

  </>
);
}
// function wait(duration:number){
//   return new Promise(resolve=>setTimeout(resolve,duration))
// }


export default Fetch;
type Todos = {id:number;title:string}

// const fetchData = async () =>{
//   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
//   return response.data;
// };
const fetchData = async () =>{
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  return response.json();
}
const DataFetch : React.FC = () =>{
  const {data,isLoading,isError,error} = useQuery({
    queryKey:['titles'],
    queryFn:fetchData,
  });
  if(isLoading)
    return <div>Loading Titles ...</div>
  if(isError)
    return <div>Error : {error.message}</div>

  return(
<>
{data?data.map((post:Todos)=>(
  <div key={post.id}>
    <p>{post.id} {post.title}</p></div>
)): <p>No data found</p>
} 


</>
  )
}
export {DataFetch}