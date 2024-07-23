function Card(props){
    const width=300;
    return(
            <div className="m-3 text-center">
                <img src="/profilePic.jpg" width={width}/>
                <h3>{props.pro.name}</h3>
                <h3>{props.pro.role}</h3>
                <button type="button" class="btn btn-primary">Connect</button>
            </div>
                
    );
}
export default Card;