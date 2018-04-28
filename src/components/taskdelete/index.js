import React from 'react';  
import './style.css'  
 
class TaskDelete extends React.Component { 
  constructor(props){ 
    super(props)
    this.delete = this.delete.bind(this);
  } 

  delete(props){
    debugger;
    this.props.delete(this.props.id);



  }
 
  render(){ 
    return ( <div>
        <button onClick={this.delete}>DELETE</button>
        </div>


        ); 
  } 
} 
 
export default TaskDelete