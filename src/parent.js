import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./HomePage";
import LoginRegister from "./login-register";
import DataFetchingAxios from "./DataFetchingAxios";
import ProductList from "./ProductList";
import LoginSuccesful from "./LoginSuccesful";
import UserProvider from "./login";
import Login_Register from "./login&register";
import Login from "./login";
import { createContext, useState } from "react";
import Profile from "./profileRegister";
import ProfileLogin from "./profileLogin";
import Product from "./product";
import Registration from "./registrationPage";

import NavBar from "./Navbar";
export const globalContext=createContext();

function Parent(){
    const [globalCount,setGlobalCount]=useState(0);
    const [globalUser,setGlobalUser]=useState({});
    const [globalLogin,setGlobalLogin]=useState(false);
    const [globalImage,setGlobalImage]=useState({});
    return(
        <div>
            
            <globalContext.Provider value={{
                globalCount,setGlobalCount,
                globalUser,setGlobalUser,
                globalLogin,setGlobalLogin,
                globalImage,setGlobalImage
                }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<NavBar/>}/>
                        <Route path="/navHome" element={<LoginRegister/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Registration/>}/>
                        <Route path="/about" element={<DataFetchingAxios/>}/>
                        <Route path="/LoginSuccessful" element={<LoginSuccesful/>}/>
                        <Route path="/products" element={<ProductList/>}/>
                        <Route path="/productDetails" element={<Product/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/profilelogin" element={<ProfileLogin/>}/>
                    </Routes>
                </BrowserRouter>
            </globalContext.Provider>
        </div>
    );
}
export default Parent;