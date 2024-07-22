import First from "./first";


function Add(){
    let x=document.getElementById("num1");
    let y=document.getElementById("num2");
    let a=parseInt(x.value);
    let b=parseInt(y.value);
    const c=a+b;
    alert("the sum is ${c}");
}

function App(){
    return(
        <div>
            <input type="text" id="num1"/><br/>
            <input type="text" id="num2"/><br/>
            <button onClick="Add()">Add</button>
            <First/>
        </div>
    )
}
export default App;