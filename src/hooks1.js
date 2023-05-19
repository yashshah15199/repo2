import React,{useState} from 'react'

function Hooks1() {
const[val,setVal]=useState()
const [text,setText]=useState()
    const handleButtonClick=(type)=>{
        console.log("Clicked",type)
        if(type==='Blue'){
            setVal('Blue')
        }
        else if(type==='Green'){
            setVal('Green')
        }
        else if(type==='Red'){
            setVal('Red')
        }
    }
    const handletextChange=(e)=>{
console.log(e.target.value)
setText(e.target.value)
    }

   
  return (
    <div>
    <button
     type="button"
      className="btn btn-primary"
      onClick={()=>handleButtonClick('Blue')}
      
      >
        Blue
        </button>
        <button
     type="button"
      className="btn btn-primary"
      onClick={()=>handleButtonClick('Green')}
      >
        Green
        </button>
        <button
     type="button"
      className="btn btn-primary"
      onClick={()=>handleButtonClick('Red')}
      >
        Red
        </button>
<h2>
    Color: 
</h2>
<input 
type="email" 
class="form-control" 
id="exampleFormControlInput1"
 placeholder="name@example.com"
 onChange={(e)=>handletextChange(e)}
 />
 <p>
    {text}
 </p>
    </div>
  )
}

export default Hooks1