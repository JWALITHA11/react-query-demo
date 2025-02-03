
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
// import EvenFetching from './EvenFetching';

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import Fetch , {DataFetch}  from './Fetch';
import Project from './Project';
// import CreateUserComponent,{Updater} from './Update';
import Source from './Source'; 
import Navbar from './Navbar';
import Practice from './Practice';
import { Updater } from './Update';
import Lists from './Lists';
// import Practice from './Practice';
// import { FetchById } from './Practice';
// import Reducer from './Reducer';
function App() {
  const fruits = ["apple","banana","cherry","avacado" ,"pear","grapes"];
 
  return (
    <>
   {/* <Fetch /> */}
    {/* <DataFetch /> */}
     {/*<h3>useMutation</h3>
    <Updater />
    <CreateUserComponent /> */}
    {/* <Project /> */}
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/source' element={<Source />} />
      <Route path='/project' element={<Project />} />
     <Route path = '/query' element={<Practice />} />
     <Route path = '/mutation' element = {<Updater />} />
     <Route path='/props' element = {<Lists fruit={fruits} />} />
    </Routes>
    </BrowserRouter>
   {/* <Practice /> */}
   {/*  */}
   
    </>
  )
}

export default App

