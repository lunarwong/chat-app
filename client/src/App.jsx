import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Homepage /> }/>
        <Route path="/login" element={ <Login /> }/>
        <Route path="/profile" element={ <Profile /> }/>
      </Routes>
    </div>
  )
} 
export default App;