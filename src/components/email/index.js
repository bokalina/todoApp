import React from 'react';  
import './style.css'  
 
class Email extends React.Component { 
  constructor(props){ 
    super(props) 
  } 
 
  render(){ 
    return (
    		<div>
    			<input type="email" name="email" placeholder="Enter email adress"/>
    		</div>
    	); 
  } 
} 
 
export default Email
