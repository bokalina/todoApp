import React from 'react';  
import './style.css';
import Task from '../../components/task';  
 
class Hometask extends React.Component { 
  constructor(props){ 
    super(props) 
  } 
 
  render(){ 
    return (
    		<div>
		    			{
		    				this.props.tasks.map(
		    					task => <Task
		    								key={task.id}
		    								id={task.id}
		    								description={task.title}
		    							/>
		    					)
		    			}
    		</div>
    	); 
  } 
} 
 
export default Hometask
