import { useState } from "react";


function FormHandling(){
    const [state,setState]= useState({lname:"",cname:"",message:"",byear:"",isChecked:false,gender:"",jexp:""})
    
    const handleChange=e=>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }
    return(
        <div>
        <form>
            <label>Last Name : {" "}
            <input type="text" name="lname" value={state.lname} onChange={handleChange}/></label>
        </form>
        

        <label>city Name : {" "}
            <input type="text" name="cname" value={state.cname} onChange={handleChange}/></label>
            <br />
        <label>Describe yourself : 
            <textarea name="message" value={state.message} onChange={handleChange}></textarea>
        </label><br />
        <label>Select your birth year : 
            <select name="byear" value={state.byear}onChange={handleChange}>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2001">2003</option>
                <option value="2004">2004</option>
                <option value="1999">1999</option>

            

            </select>
        </label>
        <br />
        <label><input type="checkbox" name="isChecked" checked={state.isChecked} onChange={handleChange}/>Graduated </label>
        <br />
        <label>
            <input type="radio" name="gender" value="male" checked={state.gender==="male"} onChange={handleChange} />Male
        </label>
        <label>
            <input type="radio" name="gender" value="female" checked={state.gender==="female"} onChange={handleChange} />Female
        </label><br /><br />
        <label>
            Job experience <input type="range" name="jexp" min="0" max="5" value={state.jexp} onChange={handleChange}/>
        </label>
        <h5>Last Name : {state.lname}</h5>
        
        <h5>city Name : {state.cname}</h5>
        <h5>About yourself : {state.message}</h5>
        <h5>Your birthyear : {state.byear}</h5>
        <h5>Graduated : {state.isChecked ?" YES" :"NO"
}</h5>
<h5>Gender : {state.gender}</h5>
<h5>Job experience : {state.jexp}</h5>
        </div>
    )
}

export default FormHandling