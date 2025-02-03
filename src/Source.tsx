import React from 'react'
import { useEffect,useRef,useState,useMemo,useCallback } from 'react'
import Context  from './Context'
import Reducer from './Reducer'
type ResponseId = {
  id:number;
}
const Source = () => {
useEffect(
   ()=>{
    const fetchData = async () =>{
        try{
            const data = await fetch('https://jsonplaceholder.typicode.com/todos/');
            const response:ResponseId[]=await data.json();

            console.log(response.map((ele)=>ele.id));
        }
        catch{
            console.log("error")
        }
    }
    fetchData();
   },[] 
)
const count = useRef(0);
const[num,setNum]=useState(0);
const handleClick = () =>{
    setNum(count.current+=1);
   
}
useEffect(
    ()=>{
        console.log("your current count is : ",count.current);
    },[num]
)
  return (
  <>
  <div className='main-source'>
  <Context />
 
 <Memo />
 <CallbackFunction />
 <ExampleCounter />
 <Reducer />
 <p>Check the console for the result <button className="btn"onClick={handleClick}>Click</button></p>
 
  </div>
  

  </>
  )
}

export default Source;






  const Memo : React.FC = () =>{
    const[number,setNumber] =useState<number>(1);
  
    const result = useMemo(()=>{
    //   console.log("calculating..")
    console.log(number)
      return number ** 2;
    },[number])
    useEffect(
        ()=>{console.log("unnecessary")
  })
  return(
    <>
    <div className='cart'>
    <h4>Check here for Squares ... </h4>
    <input type='number' value = {number} onChange={(e)=>setNumber(parseInt(e.target.value))} />
    <p>Result is {number}**2 = {result}</p>

    </div>
    </>
  )
  }
  export {Memo}

//   const CallbackFunction : React.FC = () =>{
//     const[count,setCount]=useState(0);
//     const increment = useCallback(() => {
//       setCount((prevCount) => prevCount + 1);
//       console.log("added from cart");
//     }, []);
  
//     const decrement = useCallback(() => {
//       setCount((prevCount) => prevCount - 1);
//       console.log("removed from the cart");
//     }, []);
    
//     return(
//       <>
//       <div className='cart'>
//       <h4>Shopping Cart</h4>
//       <p>Your <i className="fa-solid fa-cart-shopping"></i> has: {count} items</p>
//         <button onClick={increment} className='cart-btn '>Add to Cart</button>
//         <button onClick={decrement} className='cart-btn'>Remove from Cart</button>

//       </div>
      
//       </>
//     )
  
  
//   }
//   export {CallbackFunction}
const CallbackFunction: React.FC = () => {
    const [count, setCount] = useState(0);
  
    const increment = useCallback(() => {
      setCount((prevCount) => prevCount + 1);
      console.log("added from cart");
    },[])
    const decrement =useCallback(() => {
      setCount((prevCount) => prevCount - 1);
      console.log("removed from the cart");
    },[]);
  
    return (
      <div className='cart'>
        <h4>Shopping Cart</h4>
        <p>Your <i className="fa-solid fa-cart-shopping"></i> has: {count} items</p>
        <button onClick={increment} className='cart-btn'>Add to Cart</button>
        <button onClick={decrement} className='cart-btn'>Remove from Cart</button>
        <ChildComponent increment={increment} />
      </div>
    );
  };
export {CallbackFunction}
export const ChildComponent: React.FC<{ increment: () => void }> = React.memo(({ increment }) => {
    console.log("ChildComponent rendered");
    const handleChange = () =>{
        console.log("child props");
    }
    return(
        <>
        <button onClick={handleChange}>Click here</button>
        <button onClick={increment}>Add from Child</button>
        </>
    )
    // return ;
  });

const ExampleCounter = () =>{
    const[_data,setData] = useState(0);
    const add = () =>{
        setData((data)=>data+1);
        console.log("added");
    }
    const sub = () =>{
        setData((data)=>data-1);
        console.log("subtracted");
    }
    return(
        <>
        <div >
        <button onClick={add} className='btn'style={{marginRight:'10px'}}>ADD</button>
        <button onClick={sub} className='btn'>SUB</button>
        
        </div>
        <ExampleChild add={add} />
        </>
    )
}
export {ExampleCounter};
export const ExampleChild : React.FC <{add :()=>void}> = ({add}) =>{
console.log("I am the child component");
return(
    <>
    <button onClick={add} >+ from child</button>
    </>
)
}