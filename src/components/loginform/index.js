import React from 'react';
import { Redirect, withRouter } from "react-router-dom";  
import './style.css'  
 
class LoginForm extends React.Component { 
  constructor(props){ 
    super(props) 
    this.state={
    	email: "",
    	password: "",
    	isValid: false,
    }
}

logIn(e) {
 
	event.preventDefault();
    const handleLogin=this.props.handleLogin; 
	console.log("this.state", this.state);
	const{email,password}=this.state;
	


	

	if (!(email===""&& password==="")){
		this.setState({isValid: true})



        return;

	handleLogin();

  } }
 
  render() { 

  	
  	const {isValid}=this.state;

  	if(this.state.isValid){

  		return <Redirect to={"/home"}/>;
  	}

    return ( 
       <div className="Form">

       <h2>LOG IN </h2>
    	

    	<input 
    	type= "email" required=""
    	name="email"
    	placeholder ="Email"
    	onChange={e=>this.setState({email : event.target.value})}/>

       <input 
    	name= "password"
    	placeholder ="Password"
    	type="password" required=""
    	onChange={e=>this.setState({password : event.target.value})}/>

        <button 
        type="submit"
        onClick={()=>this.logIn()}>LOG IN </button>





  

    </div>); 
  } 
} 
 
export default LoginForm
