import React from 'react'
import './practice.css'
function Practice(props){
    // const{name,course}=props
    console.log(props)
    return(
        <div>
         <div className='mydiv'>
Hello from Practice {props.name}
        </div>
        <p>
            This is paragraph
        </p>
        <button type="button" className="btn btn-primary">Primary</button>
       
        </div>
       
    )
}
export default Practice