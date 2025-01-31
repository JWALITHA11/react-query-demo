 import { createContext,useState } from "react";
 import UserInput from "./UserInput";
 import { DisplayUser } from "./DisplayUser";
    export const contextProvider = createContext({
        user:" ",
        setUser:(value:string) =>{}
    });
 
 const  Context  = () =>{
    const [user,setUser] = useState("");
    return(
        <>
        <contextProvider.Provider value = {{user,setUser}}>
<UserInput />

        </contextProvider.Provider>
        </>
    )
}
export default Context;