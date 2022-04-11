import React,{useState} from 'react';

import {NavLink,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';


const Register = () => {
    const history = useNavigate();
    const [user, setUser] = useState({
        name:"",
        mail:"",
        password:"",
        repassword:""
    })
    const handlechange = (e) => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]:value
        })
    };
    const register = () => {
        const { name, mail, password,repassword} = user;
        if(name && mail && password && (password===repassword)){
            axios.post("http://localhost:2525/register", user)
            .then((res)=> {alert(res.data.message)
                res.data.message === "Already registered" ? history('/register') : history('/login')})
            
        } else {
           alert("Invalid") 
        }
        
    }
  return (
    <div className="register">
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} onChange={handlechange} placeholder="Your name..." ></input>
        <input type="text" name="mail" value={user.mail} onChange={handlechange} placeholder="Your mail..." ></input>
        <input type="password" name="password" value={user.password} onChange={handlechange} placeholder="Your password..." ></input>
        <input type="password" name="repassword" value={user.repassword} onChange={handlechange} placeholder="Re-enter password..." ></input>
        <div className="button" onClick={register}>Register</div>
        <div>or</div>
        <div className="button" ><NavLink to="/login">Login</NavLink></div>
    </div>
  )
}

export default Register;