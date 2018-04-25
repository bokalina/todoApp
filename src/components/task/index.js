import React from 'react';  
import './style.css'  
 
class Task extends React.Component { 
  constructor(props){ 
    super(props) 
  } 
 
  render(){ 
    return <p>{this.props.id}{this.props.description}</p>; 
  } 
} 
 
export default Task
