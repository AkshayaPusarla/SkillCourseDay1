//counter increment buttons using functional component

import { useEffect,useState } from "react";
import Button from "./addToCart";

function Counter(){
    //const count=0;
    const [count,setCount]=useState(0);
    const decrease=()=>{
        setCount(count-1);
        if(count===1){
            setCount(0);
        }
    }
    
    const increase=()=>{
        setCount(count+1);
    }

    useEffect(()=>{
        console.log("Effected");
    });
    return(
        <div>
        {count>0 &&<div className="m-3" style={{display:'flex',flexWrap:'wrap'}}>
            <button className="btn btn-light m-2 shadow" onClick={decrease}>-</button>
            <h1>{count}</h1>
            <button className="btn btn-light m-2 shadow" onClick={increase}>+</button></div>}
            {count===0 && <div onClick={increase}><Button/></div>}
        </div>
    );
}
export default Counter;