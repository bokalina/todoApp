import React from 'react';  
import './style.css'  
import TaskEdit from "../taskedit";
 
class Task extends React.Component { 
  constructor(props){ 
    super(props) 
  } 
 
  render(){ 
    return <div> <p>{this.props.id}{this.props.description}</p>
 <TaskEdit description={this.props.description} />
    </div>; 
  } 
} 
 
export default Task
