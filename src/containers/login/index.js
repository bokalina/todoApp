import React from 'react';  
import './style.css';

import LoginForm from '../../components/loginform';
 
class Login extends React.Component { 
  constructor(props){ 
    super(props) 
  } 
 
  render(){ 
    return ( <div>

    	<LoginForm/>

    	</div>

    	); 
  } 
} 
 
export default Login
