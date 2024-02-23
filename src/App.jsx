import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./components/HomePage/HomePage";




function App() {
 

  return (
 
    <div>
     <Router>
      <Navbar/>

      <Routes>
      <Route path="/" element={<HomePage/>} />

       
      </Routes>
    </Router>
    
    </div>
    
    
    
   
   
  )
}

export default App
