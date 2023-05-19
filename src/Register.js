import React from 'react'

function Register(props) {
    console.log(props)
    const handleClick=()=>{
props.isLogin();
    }
  return (
    <div>Register

<button type="button" className="btn btn-primary"
onClick={()=>handleClick()}
>Login</button>
    </div>
  )
}

export default Register