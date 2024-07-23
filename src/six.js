import { useState } from "react";

function Review(){
    const [review,setReviewValue]=useState('');
    const [display,setDisplay]=useState('');
    const inputValueChanged=(event)=>{
        // console.log("Input changed");
        // console.log(event.target.value);
        setReviewValue(event.target.value);
    }
    const addReview=()=>{
        const reviews=document.getElementById("review");
        let reviewsValue=reviews.value;
        if(reviewsValue===''){
            alert("Enter reviews");
        }
        else{
            const para=document.getElementById("para");
            para.textContent="Reviews: "+reviewsValue;
            console.log("Reviews added...");
            console.log(display);
            setDisplay(review);
        }
    }
    return(
        <div>
            <div>
                <input type="text" placeholder="Enter here" class="m-2" id="review" onChange={inputValueChanged} style={{width:'80%',height:'4%'}}/>
                <button class="btn btn-success" onClick={addReview}>Submit</button>
            </div>
            <p id="para" class="m-3">{display}</p>
        </div>
    )
}
export default Review;