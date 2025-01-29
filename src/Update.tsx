// import { useMutation,UseMutationResult } from "@tanstack/react-query";
// import axios from 'axios';
// import { useState } from "react";


import { useMutation } from "@tanstack/react-query";

import axios from 'axios';
type user = {
    id:number;
    title:string;
    completed:boolean;
}

const createsUser = async (newUser:user):Promise<user> =>{
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${newUser.id}`,newUser);
    return response.data;
};
const Updater : React.FC = () =>{
  
    const mutation  = useMutation({
      mutationFn:createsUser,
        onSuccess:(data) =>{
            console.log("Successful",data);
        },
        onError:(error) =>{
            console.log("error found",error);
        },
      onSettled:() =>{
        console.log("settling");
      },

    })
    const handleUpdate= ()=>{
       const newUser:user = {id: 1 , title:"Jwalitha",completed:true}
        mutation.mutate(newUser);
    };

    return(
        <>
      <p>Updating User ... Check Console</p>
      <button onClick={handleUpdate}>update User</button>
     
        </>
    )
}
export  {Updater};




type User = {
  id: number;
  title: string;
  completed:boolean;
};



const createUser = async (newUser: User): Promise<User> => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newUser);
  return response.data;
};

const CreateUserComponent: React.FC = () => {
  const mutation = useMutation({
    mutationFn:createUser, 
    onSuccess: (data) => {
      console.log('User created:', data);
    },
    onError: (error) => {
      console.error('Error creating user:', error);
    },
  });

  const handleCreateUser = () =>{
const newUser: User = { id: 1, title: 'Learning React Query', completed: true };
  mutation.mutate(newUser);
}
  return (
    <div>
      <p>Creating user...Check console</p>
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
};
export default CreateUserComponent;
// export default Update;
// import axios from 'axios';
// import { useMutation,UseMutationResult } from '@tanstack/react-query';
// import { useState } from 'react';
// type User = {   
//   id: number;
//   title: string;
//   completed: boolean;
// };

// const createUser = async (newUser: User): Promise<User> => {
//   const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
//   return response.data;
// };


// const CreateUserComponent: React.FC = () => {
//   const[userData,setUserData] = useState<User>({id:0,title:'',completed:false});
//   const mutation = useMutation(createUser, {
//     onSuccess: (data: User) => {
//       console.log('User created:', data);
//     },
//     onError: (error: unknown) => {
//       console.error('Error creating user:', error);
//     },
//   });

//   const newUser: User = { id: 1, title: 'John Doe', completed: true };
//   mutation.mutate(newUser);

//   return (
//     <div>
//       <p>Creating user...</p>
//     </div>
//   );
// };

// // export default CreateUserComponent;
// import axios from 'axios';
// import { useMutation} from '@tanstack/react-query';
// type Todo = {
//   title: string;
//   completed: boolean;
// };

// const createTodo = async (newTodo: Todo): Promise<Todo> => {
//   const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
//   return response.data;
// };



// const CreateTodoComponent: React.FC = () => {
//   const mutation= useMutation({
//     mutationFn:createTodo,
//     onSuccess: (data: Todo) => {
//       console.log('Todo created:', data);
//     },
//     onError: (error: unknown) => {
//       console.error('Error creating todo:', error);
//     },
//   });

//   // Example usage of the mutation
//   const newTodo: Todo = { title: 'Learn React Query', completed: false };
//   mutation.mutate(newTodo);

//   return (
//     <div>
//       <p>Creating todo...</p>
//     </div>
//   );
// };

// export default CreateTodoComponent;
