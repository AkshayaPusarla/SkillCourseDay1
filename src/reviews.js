function Reviews(){
    let reviewers={'Akshaya':'This product is good','Mohini':'This product is not good',
        'Pranitha':'Awesome product','Sushma':'Useful product','Likitha':'Not bad'
    };
    return(
        <div>
            <h1>Product Reviews</h1>
            <div>{
            Object.entries(reviewers).map(([name,review])=>(
                <div>
                    <div key={name}>
                        <div>
                            <strong>{name}</strong><br />
                            {review}
                        </div><br/>
                    </div>
                </div>
        ))}</div>
        </div>);
}
export default Reviews;