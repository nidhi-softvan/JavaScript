function Numbers(){
    const numbers=[100,200,300,400,500];
    
    const listItems=numbers.map((number)=>
    <li>{number}</li>)
        return(
            
            <ol>{listItems}</ol>
        )
}



export default Numbers