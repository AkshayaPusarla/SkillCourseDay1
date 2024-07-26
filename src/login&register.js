import { createContext, useState } from "react";
import Login from "./login";
import Register from "./register";
import Registration from "./registrationPage";
import Navigation from "./Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import NavBar from "./Navbar";



function Login_Register(){
    const [islogin,setIsLogin]=useState(false);
    const [register,setRegister]=useState(false);
    const loginButton=()=>{
        setIsLogin(true);
        setRegister(false);
    };
    const registerButton=()=>{
        setIsLogin(false);
        setRegister(true);
    }
    return(
        
            <div>
                <NavBar/>
                <button onClick={loginButton} class="btn btn-primary m-4">Login</button>
                <button onClick={registerButton} class="btn btn-primary m-4">Register</button>
                {islogin && <Login/>}
                {register && <Registration/>}
            </div>
    );
}
export default Login_Register;