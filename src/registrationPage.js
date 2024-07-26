import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "./login-register";
import { globalContext } from "./parent";
import { useNavigate } from "react-router-dom";
import Profile from "./profileRegister";
import NavBar from "./Navbar";

function Registration(){
    //const {isLogin,setIsLogin}=useContext(UserContext);
    const [user,setUser]=useState({});
    const {globalUser,setGlobalUser}=useContext(globalContext);

    const [collegeId,setCollegeId]=useState('');
    const [msg,setMsg]=useState('');
    const [password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    const [branch,setBranch]=useState('');
    const [year,setYear]=useState('');
    const [gender,setGender]=useState('');

    const nav=useNavigate();
    

    const getCollegeId=(event)=>{
        setCollegeId(event.target.value);
    };
    const getPassword=(event)=>{
        setPassword(event.target.value);
    };
    const getEmail=(event)=>{
        setEmail(event.target.value);
    };
    const getBranch=(event)=>{
        setBranch(event.target.value);
    };
    const getYear=(event)=>{
        setYear(event.target.value);
    };
    const getGender=(event)=>{
        setGender(event.target.value);
    };

    const submit=()=>{
        if(collegeId==='' || password==='' || email==='' || branch==='' || year===''){
            alert("Enter all the details..!");
        }
        else{
            let obj={collegeId,password,email,branch,year,gender};
            setUser(obj);
            setGlobalUser(obj);
            localStorage.setItem("id",collegeId);
            localStorage.setItem("password",password);
            localStorage.setItem("email",email);
            localStorage.setItem("branch",branch);
            localStorage.setItem("year",year);
            localStorage.setItem("gender",gender);
            console.log(obj);
            nav("/profile");
            setMsg("Successful..!");
        }
    };
    

    const formRegister=(event)=>{
        event.preventDefault();
    };
    return(
        <div>
            <div class="d-flex justify-content-center m-3 p-3 text-center">
                <div className="m-3 p-3 card" style={{width:'600px'}}>
                    <h1>Register</h1>
                    <p>Provide your details to register</p>
                    <form onSubmit={formRegister}>
                        <h4>College Id</h4>
                        <input type="text" placeholder="College Id" onChange={getCollegeId}/>
                        <br></br>
                        <h4>Password</h4>
                        <input type="password" placeholder="Password" onChange={getPassword}/>
                        <br></br>
                        <h4>Email Address</h4>
                        <input type="email" placeholder="Email" onChange={getEmail}/>
                        <br></br>
                        <h4>Branch</h4>
                        <select onChange={getBranch} value={branch}>
                            <option value="default">Select Branch</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="AIDS">AIDS</option>
                            <option value="AIML">AIML</option>
                        </select>
                        
                        <br></br>
                        <h4>Year</h4>
                        <select onChange={getYear} value={year}>
                            <option value="default">Select Year</option>
                            <option value="I">I</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                        </select>
                        <br></br>
                        <h4>Gender</h4>
                        <input class="m-1" type="radio" onChange={getGender} value="Male" checked={gender==="Male"}/>Male
                        <input class="m-1" type="radio" onChange={getGender} value="Female" checked={gender==="Female"}/>Female
                        <input class="m-1" type="radio" onChange={getGender} value="Other" checked={gender==="Other"}/>Other
                        <br></br>
                        <button class="btn btn-dark m-3" onClick={submit}>Register</button> 
                        <br></br>
                        <a href="/login">Go To Login</a>
                        
                    </form>
                    <p>{msg}</p>
                </div>
            </div>
        </div>
    );
}
export default Registration;