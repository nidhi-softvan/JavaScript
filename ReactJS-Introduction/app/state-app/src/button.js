import { Component } from "react";

class LogButton extends Component{
    handleClick=()=>{
        console.log('this is : ',this)
    }
    render(){
        return(
            <button onClick={this.handleClick}>
                Click me
            </button>
        )
    }
}

export default  LogButton