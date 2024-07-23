import Card from "./card";

function CardList(){
    //props
    const details1={name:"Akshaya",role:"Full Stack Developer"};
    const details2={name:"Mohini",role:"FrontEnd Developer"};
    const users=["name1","name2","name3","name4","name5","name6","name7","name8","name9","name10"];
    return(
        <div style={{display:'flex',flexWrap:'wrap'}}>
            {users.map(
                (info,index)=>(
                    <Card key={index} pro={details1}/>
            ))
        }</div>
    );
}
export default CardList;