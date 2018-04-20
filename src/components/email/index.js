import React from 'react';  
import './style.css'  
 
class Email extends React.Component { 
  constructor(props){ 
    super(props) 
  } 
 
  render() { return(


    <div>
     <input type="email" name="email" placeholder="enter email"/>


    </div>

    ); 
  } 
} 
 
export default Email
