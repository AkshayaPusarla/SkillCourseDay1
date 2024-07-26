import { useRef } from "react";

function Seven(){
    const firstRef=useRef(null); //reference
    const formSubmitted=(event)=>{
        event.preventDefault(); //to prevent reloading the page
        console.log("Form submitted...");
        console.log(firstRef.current.value);
        firstRef.current.value=''; //clear the input value
    };
    return(
        <div>
            <form onSubmit={formSubmitted}>
                <input type="text" placeholder="Enter text here" style={{width:'300px'}} ref={firstRef}/><br></br>
                <button >Submit</button>
            </form>
        </div>
    );
}
export default Seven;