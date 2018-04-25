import React from 'react';  
import './style.css'  
import Home from '../../containers/home';
import Task from '../../components/task';
 
class Tasks extends React.Component { 
  constructor(props){ 
    super(props) 
  } 
 
  render(){ 
    return (
        

        <div>

        {this.props.tasks.map(
task=><Task
         key={task.id}
         id={task.id}
         description={task.title}/>
        	)

        }

        </div>


    	);
  } 
} 
 
export default Tasks
