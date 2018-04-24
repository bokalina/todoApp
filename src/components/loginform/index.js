import React from 'react';  
import './style.css'  
 
class LoginForm extends React.Component { 
  constructor(props){ 
    super(props) 
    this.state={
    	email: "",
    	password: "",
    }
}

logIn(){

	cosole.log("this.state", this.state);

  } 
 
  render(){ 
    return ( 
       <div className="Form">

       <h2>LOG IN </h2>
    	

    	<input 
    	type= "email"
    	name="email"
    	placeholder ="Email"
    	onChange={e=>this.setState({email : e.targte.value})}/>

       <input 
    	name= "password"
    	placeholder ="Password"
    	type="password"
    	onChange={e=>this.setState({password : e.targte.value})}/>

        <button 
        type="submit"
        onClick={()=>this.logIn()}>LOG IN </button>





  

    </div>); 
  } 
} 
 
export default LoginForm
