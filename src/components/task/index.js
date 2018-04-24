import React from 'react';  
import './style.css'  
 
class Task extends React.Component { 
  constructor(props){ 
    super(props) 
  } 
 
  render(){ 
    return (
    	<div>
    		<p>{this.props.id}{this.props.description}</p>
    	</div>
    	) 
  } 
} 
 
export default Task
