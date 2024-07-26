import { useContext, useEffect } from "react";
import { globalContext } from "./parent";
import LoginSuccesful from "./LoginSuccesful";

function ProfileLogin(){
    const {globalUser,setGlobalUser}=useContext(globalContext);
    const name =localStorage.getItem("name"); 
    const password=localStorage.getItem("password");
    useEffect(()=>{
        //const name =localStorage.getItem("name"); 
    });
    return(
        <div>
            <h1>Profile Login Details</h1>
            {/* <h3>User Id: {globalUser.refIdValue}</h3> */}
            <h3>UserId: {name}</h3>
            {/* <h3>Password: {globalUser.refPasswordValue}</h3> */}
            <h3>Password: {password}</h3>
            <LoginSuccesful/>
        </div>
    );
}
export default ProfileLogin;