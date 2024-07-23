function Connections2(){
    let names=["name1","name2","name3","name4"];
    return(
        <div>{
            names.map((name,index)=>(
                <div key={index}>{name}</div>
            ))
        }</div>
    );
}
export default Connections2;