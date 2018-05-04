import React from 'react';  
import './style.css';

import Home from '../../containers/home';
import Task from '../../components/task';

class Tasks extends React.Component { 
 
 constructor(props){
  super(props);
 }


 render(){ 
    return (
            <table className="tableTask">
                <thead>
                    <tr>
                      <th>Done</th>
                      <th>ID</th>
                      <th>Description</th>
                      <th>Assignee</th>
                      <th></th>
                      <th></th>
                    </tr>
                </thead>
                <tbody>
		    			{
		    				this.state.tasks.map(
		    					(task) => <Task 
                              key={task.id}
                              id={task.id}
                              description={task.description}
                              assignee={task.assignee}
                              delete = {this.delete}
                              done = {task.done}
                              edit = {this.edit}

                            />
		    					)
		    			}
    		
                </tbody>
            </table>
    	); 
  } 
} 
 
export default Tasks
