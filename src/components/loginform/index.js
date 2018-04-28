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
    this.logIn = this.logIn.bind(this);
}

logIn(event) {
 
    event.preventDefault();
    console.log(this.state.email);
    const {email,password}=this.state;
    console.log(email);
    console.log(password);


    

    if (!(email===""&& password==="")){
        this.setState({isValid: true})

    }

}
 
  render() { 

    if(this.state.isValid){

        return <Redirect to={"/"}/>;
    }

    return ( 
       <div className="Form">

       <h2>LOG IN </h2>
        
       <form onSubmit={this.logIn}>
        <input 
        type= "email" required
        name="email"
        placeholder ="Email"
        onChange={e=>this.setState({email : e.target.value})}/>

       <input 
        name= "password"
        placeholder ="Password"
        type="password" required
        onChange={e=>this.setState({password : e.target.value})}/>

        <button 
        type="submit">
        LOG IN
        </button>
        
        </form>




  

    </div>); 
  } 
} 
 
export default LoginForm
