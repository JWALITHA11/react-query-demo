import { useQuery } from "@tanstack/react-query";
import { Todos } from "./Fetch";
import { DataFetch } from "./Fetch";
const fetchData = () =>{
    return fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response =>{return response.json()})
};
const Practice = () => {
    const{isLoading,error,data}=useQuery({
        queryKey:['posts'],
        queryFn:fetchData,
    })
    if(isLoading)
        return<div>Loading the results ... Please Wait</div>
    if(error)
        return<div>Error Occured .Check once</div>
  return (
    <>
    <ol>
        {data.map((posts:Todos)=>(
            <li key={posts.id}>  {posts.title}</li>
        ))
        }
    </ol>
    <FetchById fetchId={14} />
    </>
  )
}

export default Practice
type todosList = {
    id:number;
    title:string;
};
type ids= {
    fetchId:number;
    
}

const fetchDataId = async (fetchId:number) :Promise <todosList>=>{
const response= await fetch (`https://jsonplaceholder.typicode.com/todos/${fetchId}`);
if(!response.ok){
    throw new Error("error occurs");
}
return response.json();
};
const FetchById:React.FC<ids> = ({fetchId}) =>{
   const sampleVal = useQuery({
    queryKey:['postId',fetchId],
    queryFn:()=>fetchDataId(fetchId)
   })
   if(sampleVal.isLoading)
    return <div>Values are Loading ... </div>
    if(sampleVal.error)
     return <div>Error Occured</div>
    return(
        <>
        <div>
            <h1>{sampleVal.data?.title}</h1>
        </div>
        </>
    )
}
export {FetchById};