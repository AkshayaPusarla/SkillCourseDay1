import { useContext } from "react";
import { globalContext } from "./parent";

function Profile(){
    const {globalUser,setGlobalUser}=useContext(globalContext);
    const id=localStorage.getItem("id");
    const branch=localStorage.getItem("branch");
    const email=localStorage.getItem("email");
    const password=localStorage.getItem("password");
    const year=localStorage.getItem("year");
    const gender=localStorage.getItem("gender");

    return(
        <div class="m-3 p-3">
            <h1>Profile Page</h1>
            <div class="p-3 m-3">
                {/* <h3>College Id: {globalUser.collegeId}</h3>
                <h3>Password: {globalUser.password}</h3>
                <h3>Email Address: {globalUser.email}</h3>
                <h3>Branch: {globalUser.branch}</h3>
                <h3>Year: {globalUser.year}</h3>
                <h3>Gender: {globalUser.gender}</h3> */}
                <h3>College Id: {id}</h3>
                <h3>Password: {password}</h3>
                <h3>Email Address: {email}</h3>
                <h3>Branch: {branch}</h3>
                <h3>Year: {year}</h3>
                <h3>Gender: {gender}</h3>
            </div>
        </div>
    );
}
export default Profile;