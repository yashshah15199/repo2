
import React,{useState} from 'react'
import Practice from './practice'
import Practice1 from './practice1'
import Hooks1 from './hooks1'
import Register from './Register'
import Login from './Login'
function App() {
const[isregister,setIsRegister]=useState(true)
const isLogin=()=>{
  setIsRegister(false)
}

  //Logic
  return (
    <div className="App">
     {isregister?<Register isLogin={isLogin}/>:<Login/>}
    
    </ div>
  );
}

export default App;
