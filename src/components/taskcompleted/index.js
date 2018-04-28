import React from 'react';  
import './style.css'  
 
class TaskCompleted extends React.Component { 
  constructor(props){ 
    super(props) 
  } 
 
  render(){ 
    return <input id="checkBox" type="checkbox" defaultValue={this.props.done} />
  } 
} 
 
export default TaskCompleted
