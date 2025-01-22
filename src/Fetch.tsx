// import useFetch from "./useFetch";
import React from 'react';
import { useQuery } from "@tanstack/react-query";

// const Fetch : React.FC = () =>{
//     const [data] = useFetch('https://jsonplaceholder.typicode.com/todos/')
//     return(
//         <>>
//         <ul>
// {data.map((ele:Todos,index) =>(

//     <li key={index}>{ele.title}</li>
// ))}</ul>
//         </>
//     )
// }
    
// export default Fetch ;




//using useQuery hook 

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const useTodos = () => {
  return useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });
};

const Fetch: React.FC = () => {
  const { data, error, isLoading } = useTodos();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ol>
      {data?.map((todo: Todo) => (
        <li key={todo.id}>
            <p>ID : {todo.id}</p>
            <p>Title : {todo.title}</p>
            <p>Completed : {todo.completed ? "Yes" : "No"}</p>
    </li>
      ))}
    </ol>
  );
};

export default Fetch;
