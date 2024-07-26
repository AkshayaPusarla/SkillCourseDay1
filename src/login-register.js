import { createContext, useState } from "react";
import Login_Register from "./login&register";
export const UserContext=createContext(); //create Context
function LoginRegister(){
    const [islogin,setIsLogin]=useState(false);
    return(
        <UserContext.Provider value={{islogin,setIsLogin}}>
            <div>
                <Login_Register/>
            </div>
        </UserContext.Provider>
    );
}
export default LoginRegister;