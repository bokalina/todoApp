import React from 'react';  
import './style.css'  
 
class Password extends React.Component { 
  constructor(props){ 
    super(props) 
  } 
 
  render(){ 
    return (
    		<div>
    			<input type="password" name="password" placeholder="Enter password"/>
    		</div>
    	); ; 
  } 
} 
 
export default Password
