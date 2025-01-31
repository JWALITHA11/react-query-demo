import {useState} from 'react';
const Project:React.FC = () => {
    const[data,setData]=useState({
        username:'',
        email:'',
        password:''
     })
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const{name,value}=e.target;
    setData({...data,[name]:value});
  };
  return (
   <>
   <form className='form-field'>
    {/* <fieldset> */}
     <label htmlFor='uname'><i className="fa-solid fa-user"></i> UserName</label>
    <input type='text' name='username' id='uname' value={data.username} onChange={handleChange} required/>
    <label htmlFor='email'> <i className="fa-solid fa-envelope"></i> Mail Address</label>
    <input type='email' name='email' id='email' value={data.email} onChange={handleChange} required/>
    <label htmlFor="pswd"><i className="fa-solid fa-lock"></i> Password</label>
    <input type='password' name='password' id='pswd' value={data.password} onChange={handleChange} required/>
    <button type='submit' onClick={()=>alert("Now select source ")} className='btn'>Submit</button>
    {/* </fieldset> */}
   </form>

   </>
  )
}

export default Project;