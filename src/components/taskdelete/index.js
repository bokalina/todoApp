import React from 'react';  
import './style.css'  
 
class TaskDelete extends React.Component { 
  constructor(props){ 
    super(props) 

    this.state ={

    	tasks:[]
    }


  } 

  delete(id){
  	this.props.delete(id);



  }
 
  render(){ 
    return ( <div> {this.props.tasks.map(task=>(
    	<li key={task.id}>
    	<button onClick={this.delete.bind(this, task)}>DELETE</button></li>


    	))}

    	</div>


    	); 
  } 
} 
 
export default TaskDelete
