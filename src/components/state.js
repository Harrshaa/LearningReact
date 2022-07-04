import React,{Component} from "react";
import Courses from "./courses";
import Propss from "./propss";

class State extends Component{
    state={
        counter:1,
        heading:"WELCOME TO REACT",
        title:"WELCOME TO HARSHA'S WORLD"
    };

    handleClick =()=>{  //use arrow function//
    let localCounter= this.state.counter;
    // let localHeading= this.state.heading;
    this.setState({
    counter:localCounter+1,
    heading:"THIS IS HARSHA"
    })
    }

    render(){
        return(
            <>
            <h1>{this.state.heading}</h1>
            <button onClick={this.handleClick}>Add</button>
            <p>{this.state.counter}</p> 
            <Propss heading={this.state.title} />
            <Courses />           
            </>
        );
    }

}
export default State;
