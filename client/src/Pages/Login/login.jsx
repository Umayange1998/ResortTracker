import { Button } from '@mui/material'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import {setIsAuth} from "../../reducers/isAuthSlise"
import { useDispatch } from 'react-redux';

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin=()=>{
    dispatch(setIsAuth(true))
    navigate('/employeeinfo');  };
  return (
    <div>
      <Button onClick={handleLogin}>Login</Button>

    </div>
  )
}

export default Login
