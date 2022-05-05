import { Component } from "react";

class ParentComponent extends Component{
    render(){
        return(
            <ChildComponent name="PASSED USING PROP" />
        )
    }
}

const ChildComponent=(props)=>{
    return <p>{props.name}</p>
}

export default ParentComponent;