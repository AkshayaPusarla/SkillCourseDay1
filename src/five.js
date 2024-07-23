//count increment using functional component

import { useEffect,useState } from "react";

function Five(){
    //const count=0;
    const [count,setCount]=useState(0);
    const decrease=()=>{
        setCount(count-1);
    }
    const increase=()=>{
        setCount(count+1);
    }
    const reset=()=>{
        setCount(0);
    }

    useEffect(()=>{
        console.log("Effected");
    });
    return(
        <div className="text-center">
            <h1>Count: {count}</h1>
            <button className="btn btn-primary m-2" onClick={increase}>Increase</button>
            <button className="btn btn-primary m-2" onClick={decrease}>Decrease</button>
            <button className="btn btn-primary m-2" onClick={reset}>Reset</button>
        </div>
    );
}
export default Five;