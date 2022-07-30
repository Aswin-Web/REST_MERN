import React from "react"
import './App.css'
import Home from "../src/components/Home"
import Add from "../src/components/Add"
import {BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>


    

    <Routes>
      <Route exact path="/" element={<Home />} /> 
      <Route path="/add/" element={<Add/>} /> 
      <Route path="/add/:id" element={<Add/>} /> 
      
    </Routes>


    </BrowserRouter>
  
  
    
  );
}

export default App;
