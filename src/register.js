//Register using Reference Id
import { useEffect, useRef, useState,useContext } from "react";
import Navigation from "./Navbar";


function Register(){
    const refId=useRef(null);
    const refPassword=useRef(null);
    const [msg,setMsg]=useState('');
    
    useEffect(()=>{
        refId.current.focus();
    });
    const formRegister=(event)=>{
        event.preventDefault();
        refId.current.value='';
        refPassword.current.value='';
    };
    const submit=()=>{
        if(refId.current.value===refPassword.current.value && refId.current.value!='' && refPassword.current.value!=''){
            setMsg('Successful..!');
            console.log(refId.current.value);
            console.log(refPassword.current.value);
        }
        else{
            setMsg("Enter valid details");
        }
    };
    return(
        <div class="d-flex justify-content-center m-3 p-3">
            <div className="m-3 p-3 card text-center" style={{width:'600px'}}>
                <h1>Register</h1>
                <p>Provide your details to register</p>
                <form onSubmit={formRegister}>
                    <h4>College Id</h4>
                    <input type="text" placeholder="College Id" ref={refId} focus={refId}/>
                    <br></br>
                    <h4>Password</h4>
                    <input type="password" placeholder="Password" ref={refPassword}/><br></br>
                    <h4>Re-enter Password</h4>
                    <input type="password" placeholder="Re-enter Password" ref={refPassword}/><br></br>
                    <button class="btn btn-dark m-3" onClick={submit}>Register</button>
                </form>
                <p>{msg}</p>
            </div>
        </div>
    );
}
export default Register;