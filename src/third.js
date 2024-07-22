function Array(){
    let arr=["A","B","C","D","E"];
    return (<div>
        <ul>{
            arr.map((item,index) => (
                <li key={index}>{item}</li>
        ))}</ul>
    </div>);
}
export default Array;