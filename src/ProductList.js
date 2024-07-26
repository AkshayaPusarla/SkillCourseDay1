import { useEffect, useState } from "react";
import Counter from "./buttonIncrement";
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";

function ProductList(){
    const [data,setData]=useState([]);
    const nav=useNavigate();
    const [image,setImage]=useState([]);
    useEffect(()=>{
        const fetchMyData=async()=>{
            const response=await fetch('https://fakestoreapi.com/products');
            const resData=await response.json();
            setData(resData);
            console.log(data);
        }
        fetchMyData();
    });
    const details=(()=>{
        nav("/productDetails");
    });
    return(
        <div>
            <NavBar/>
            <div style={{display:'flex',flexWrap:'wrap'}}>
                {data.map((dataList,index)=>(
                <div>
                    <div onClick={details} class="card m-3" key={index} style={{height:'450px',width:'500px',borderRadius:'5px'}}>
                        <div class="d-flex justify-content-center">
                            <img class='p-3' src={dataList.image} key={index} style={{height:'200px',width:'300px'}}/>
                        </div>
                        <h3>{dataList.title}</h3>
                        <p>Rating: {dataList.rating.rate}  ({dataList.rating.count})</p>
                        <p><b>Price: {dataList.price}$</b></p>
                        <button><Counter/></button>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
export default ProductList;