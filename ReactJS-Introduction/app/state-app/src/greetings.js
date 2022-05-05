import { Component } from "react";

class Greetings extends Component{
   state={
       name:"Nidhi"
   } 
  
   render(){
       return(
           <div>
               {this.state.name}
               
           </div>
       )
   }
}

export default Greetings