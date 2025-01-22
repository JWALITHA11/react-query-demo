import {useState,useEffect} from 'react';
type Todo = {
    id: number;
    title: string;
    isCompleted: boolean;
  };
// const useFetch = (url:string) =>{
// const[data,setData] = useState<Todos[]>([]);
// const fetchData = async () =>{


// try{
//     let response = await fetch(url);
//     let output = await response.json();
//     setData(output);
// }
// catch(e){
//     console.log(e)
// }


// };
// useEffect(
//     ()=>{
//         fetchData();
//     }
// ,[url]);
// return [data];
// };
// export default useFetch;

//fetch function
const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };