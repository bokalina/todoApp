import React from 'react';  
import './style.css'  
 
class TaskCompleted extends React.Component { 
  constructor(props){ 
    super(props);
    this.onChange = this.onChange.bind(this); 
  } 

  onChange(){
    console.log('checkbox clicked');
    this.props.checkbox(this.props.id);
  }
 
  render(){ 
    return <input id="checkBox" type="checkbox" checked={this.props.done} onChange={this.onChange} />
  } 
} 
 
export default TaskCompleted