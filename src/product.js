import { useContext } from "react";
import Counter from "./buttonIncrement";
import NavBar from "./Navbar";
import Reviews from "./reviews";
import Review from "./six";
import { globalContext } from "./parent";


function Product(){
    const {globalImage,setGlobalImage}=useContext(globalContext);
    return(
        <div>
            <NavBar/>
            <div class="m-3">
            <h1>Product Name</h1>
                <div class="d-flex flex-row p-3" style={{borderWidth:'4px',border:'2px solid #ccc',borderColor:'#e9f0ea'}}>
                    <div>
                        <img src="/products.jpg" style={{height:'350px',width:'90%'}}/>
                    </div>
                    <div class="d-flex flex-column">
                       <h3>Product Name</h3>
                        <p>Description Description Description Description Description Description Description Description</p>
                        <br></br><br></br>
                        <h3>200.02$</h3>
                        <Counter/>
                    </div>
                </div>

                <div class="p-3" style={{borderWidth:'4px',border:'2px solid #ccc',borderColor:'#e9f0ea'}}>
                    <h3>Product Specifications</h3>
                    <p>Description Description Description Description Description Description Description Description</p>
                </div>

                <div class="p-3" style={{borderWidth:'4px',border:'2px solid #ccc',borderColor:'#e9f0ea'}}>
                    <h2>Reviews</h2>
                    <Review/>
                    <Reviews/>
                </div>
            </div>
        </div>
    );
}
export default Product;