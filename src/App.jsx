import React from 'react'
import "tailwindcss";
import Home from './Pages/Home';
import UserContext from './context/UserContext';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <UserContext>
      <Home />
      <ToastContainer />
    </UserContext>
  )
}

export default App;