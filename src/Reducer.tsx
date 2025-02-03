import { useReducer } from "react";
interface State {
    name: string;
    age: number;
    isLoggedIn: boolean;
}

interface Action {
    type: string;
    newName?: string;
}

function reducer(state:State,action:Action):State{
    switch(action.type){
        case 'INCREMENTED_AGE' : {
            return{
               ...state,
                age:state.age+1
            };
        }
        case 'CHANGED_NAME' : {
            return{
                ...state,
                name : action.newName || state.name,
               
            };
        }
        case 'LOGIN' : {
            return{
                ...state,
                isLoggedIn : true
            };
        }
        
        default : {
            return state;
        }
    }
}
const Reducer : React.FC = () =>{
    const initialState:State = {name:'john',age:22,isLoggedIn:false}
    const[state,dispatch] = useReducer(reducer,initialState);
    function handleButtonClick () {
        dispatch({type:'INCREMENTED_AGE'});
    }
    function handleInputChange(e:React.ChangeEvent<HTMLInputElement>){
        dispatch({
            type:'CHANGED_NAME',
            newName:e.target.value,
    

        });
    }
    function loginChange(){
        dispatch({type:'LOGIN' });
    }
    return(
        <>
        <div className="cart">
        <input value = {state.name} onChange={handleInputChange} />
        <button onClick={handleButtonClick} className="btn">Increment age</button>
        <button onClick={loginChange} className="btn">Login</button>
            {state.isLoggedIn && <p>Welcome, {state.name}!</p>}
<p> Hi {state.name} you're {state.age} yrs old</p>
</div>
        </>
    )
}
export default Reducer;

type State2 = {
    count: number;
}

type Action2 = {
    type: 'ACTION.INCREASE' | 'ACTION.DECREASE';
}
function reducer2(state:State2,action:Action2){
    switch(action.type){
        case 'ACTION.INCREASE':
            return{count:state.count+1};
 
    case 'ACTION.DECREASE':
            return{count:state.count-1};
   default :
   return state;
}
}
const initialVal = {count:0};






const Reducer2 : React.FC = () =>{
    const[state,dispatch] = useReducer(reducer2,initialVal);
    const increaseCount = () =>{
        dispatch({
            type:'ACTION.INCREASE'
        });
    }
    const decreaseCount = () =>{
        dispatch({
            type:'ACTION.DECREASE'
        })
    }
    return(
        <>
        <div className="cart">  <button className="btn" onClick={increaseCount}>+</button>
        <button className="btn" onClick={decreaseCount}>-</button>
        <p>Count is : {state.count}</p>

        </div>
      
        </>
    )
}
export {Reducer2}