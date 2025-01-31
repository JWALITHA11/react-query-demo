import { contextProvider } from "./Context";
import { useContext } from "react";
  export function DisplayUser () {
    const context = useContext(contextProvider);
    const {user} = context;
    return(
        <>
        <h2> Welcome  {user} !!</h2>
        </>
    )
  }
