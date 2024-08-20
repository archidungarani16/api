import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const gotTopage=()=>{
        // navigate("/logout")
    }
  return (
    <>
    <h1>
        This is Private Page
    </h1>
    </>
  )
}

export default Login