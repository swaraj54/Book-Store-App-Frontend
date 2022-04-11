import React, {useState} from 'react';
import {NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = ({loginuser}) => {
    const history = useNavigate();
    const [user, setUser] = useState({
        mail:"",
        password:"",
    })
    const handlechange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    const login = () => {
        axios.post("http://localhost:2525/login", user)
        .then((res)=>{
             alert(res.data.message)
             loginuser(res.data.user)
             history('/')
            })

    }
  return (
    <div className="login">
        <h1>Login</h1>
        <input type="text" name="mail" value={user.mail} onChange={handlechange} placeholder="Enter your name..." ></input>
        <input type="password" name="password" value={user.password} onChange={handlechange} placeholder="Enter your password..." ></input>
        <div className="button" onClick={login}>Login</div>
        <div>or</div>
        <div className="button" ><NavLink to="/register">Register</NavLink></div>
    </div>
  )
}

export default Login;