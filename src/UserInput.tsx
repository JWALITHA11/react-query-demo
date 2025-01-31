 import { useContext } from "react";
 import { contextProvider } from "./Context";
 import { DisplayUser } from "./DisplayUser";
 const UserInput = () => {
    const { setUser } = useContext(contextProvider);
  
    return (
      <div>
     <input type="text" placeholder="Enter your name" onChange={(e) => setUser(e.target.value)} />
     <DisplayUser />
      </div>
    );
  }
  export default UserInput;
//   import { contextProvider } from "./Context";