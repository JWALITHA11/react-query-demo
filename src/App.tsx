import React from 'react';
import './App.css'
// import EvenFetching from './EvenFetching';

// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Fetch , {DataFetch}  from './Fetch';
import CreateUserComponent,{Updater} from './Update';

function App() {

  return (
    <>
   <Fetch />
    <DataFetch />
    <h3>useMutation</h3>
    <Updater />
    <CreateUserComponent />
    </>
  )
}

export default App

