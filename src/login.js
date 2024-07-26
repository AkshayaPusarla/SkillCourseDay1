import { useContext, useEffect, useRef, useState } from "react";
import { BrowserRouter, Router,Route, Routes, useNavigate } from "react-router-dom";
import DataFetchingAxios from "./DataFetchingAxios";
import ProductList from "./ProductList";
import Navigation from "./Navbar";
import LoginSuccesful from "./LoginSuccesful";
import { UserContext } from "./login-register";
import { globalContext } from "./parent";
import NavBar from "./Navbar";


function Login(){
    const refId=useRef(null);
    const refPassword=useRef(null);
    const [msg,setMsg]=useState('');
    //const {isLogin,setIsLogin}=useContext(UserContext);
    const nav=useNavigate();
    const {globalLogin,setGlobalLogin}=useContext(globalContext);
    const {globalUser,setGlobalUser}=useContext(globalContext);
    
    
    useEffect(()=>{
        refId.current.focus();
    });
    const formLogin=(event)=>{
        event.preventDefault();
        refId.current.value='';
        refPassword.current.value='';
    };
    const submit=()=>{   
        if(refId.current.value!='' && refPassword.current.value!=''){
            const refIdValue=refId.current.value;
            let refPasswordValue=refPassword.current.value;
            let obj={refIdValue,refPasswordValue};
            console.log(obj);
            setMsg("Successful..!");
            setGlobalLogin(true);
            setGlobalUser(obj);
            localStorage.setItem("name",refIdValue);
            localStorage.setItem("password",refPasswordValue);

            nav("/profilelogin");
        }
        else{
            setMsg("Enter valid details");
        }
    };
    return(
            <div>
                <div class="d-flex justify-content-center m-3 p-3">
                    <div className="m-3 p-3 card text-center" style={{width:'600px'}}>
                        <h1>Login</h1>
                        <p>Provide your details to login</p>
                        <form onSubmit={formLogin}>
                            <h4>College Id</h4>
                            <input type="text" placeholder="College Id" ref={refId} focus={refId}/>
                            <br></br>
                            <h4>Password</h4>
                            <input type="password" placeholder="Password" ref={refPassword}/><br></br>
                            <button class="btn btn-dark m-3" onClick={submit}>Login</button><br></br>
                            <p>Not yet Registered..!</p>
                            <a href="/register">Register</a>
                        </form>
                        <p>{msg}</p>
                    </div>
                </div>
            </div>
    );
}
export default Login;