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

logIn(e) {
 
	event.preventDefault();

	console.log("this.state", this.state);
	const{email,password}=this.state;

	

  } 
 
  render(){ 
    return ( 
       <div className="Form">

       <h2>LOG IN </h2>
    	

    	<input 
    	type= "email" required=""
    	name="email"
    	placeholder ="Email"
    	onChange={e=>this.setState({email : e.target.value})}/>

       <input 
    	name= "password"
    	placeholder ="Password"
    	type="password" required=""
    	onChange={e=>this.setState({password : e.target.value})}/>

        <button 
        type="submit"
        onClick={()=>this.logIn()}>LOG IN </button>





  

    </div>); 
  } 
} 
 
export default LoginForm
