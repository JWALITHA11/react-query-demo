
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
// import EvenFetching from './EvenFetching';

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Fetch , {DataFetch}  from './Fetch';
import Project from './Project';
import CreateUserComponent,{Updater} from './Update';
import Source from './Source'; 
import Navbar from './Navbar';

function App() {

  return (
    <>
   {/* <Fetch />
    <DataFetch />
    <h3>useMutation</h3>
    <Updater />
    <CreateUserComponent /> */}
    {/* <Project /> */}
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/source' element={<Source />} />
      <Route path='/project' element={<Project />} />
     
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App

