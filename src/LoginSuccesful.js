import { useNavigate } from "react-router-dom"
import { UserContext } from "./login";
import { useContext } from "react";
function LoginSuccesful(){
    const nav=useNavigate();
    /*const navigating=()=>{
        navigate("/products")
    }*/
    return(
        <div class="d-flex flex-row justify-content-center">
            <div>
                <h2>Login Successful...!</h2>
                <button class="btn btn-primary m-4" onClick={()=>{nav("/products")}}>Go to Products</button> 
            </div>
        </div>
    );
}
export default LoginSuccesful;