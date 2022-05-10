import './App.css';
import {useState} from 'react';
import FormHandling from './form';
function App() {
  const [fname,setFname]=useState("")

  const handleChange=e=>{
    setFname(e.target.value)
  }
  return (
    <div className="App">
        <h1>Form Handling</h1>
        <form>
          <label>First name : {" "} <input type="text" value={fname} onChange={handleChange}/></label>
        </form>
        
        <h5>First name : {fname}</h5>
        <FormHandling />

    </div>
  );
}

export default App;
