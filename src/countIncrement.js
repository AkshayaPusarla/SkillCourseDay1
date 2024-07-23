//count increment using Class component
import React from "react";


class Count extends React.Component{
    count=1;
    ele="This is Class Component"
    render(){
        return(
            <div className="text-center m-3">
                <h1>{this.ele} {this.state.number}</h1>
                <button className="btn btn-primary" onClick={this.fxn}>Submit</button>
            </div>
        );
    }
    componentDidMount(){
        console.log("Mounted");
    }
    componentDidUpdate(){
        console.log("Updated");
    }
    constructor(){
        super();
        this.state={
            number : 1
        }
    }
    fxn = () => {
        console.log("Clicked "+this.state.number);
        this.setState({number: this.state.number+1});
    }
}
export default Count;