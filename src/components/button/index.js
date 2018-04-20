import React from 'react';  
import './style.css'  
 
class Button extends React.Component { 
  constructor(props){ 
    super(props) 
  } 

  
 
  render(){ 
    return (
    	<div>
    		<button type="submit" >Log In</button>
    	</div>
    	); 
  } 
} 
 
export default Button
