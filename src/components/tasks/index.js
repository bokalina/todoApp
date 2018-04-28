import React from 'react';  
import './style.css';

import Home from '../../containers/home';
import Task from '../../components/task';

class Tasks extends React.Component { 
  constructor(props){ 
    super(props);
    this.state={tasks:[]};

    this.getAll = this.getAll.bind(this);
    this.delete=this.delete.bind(this)

    }

  getAll(){
    fetch('http://anticni.pythonanywhere.com/api/tasks/all')
    .then( response => response.json() )
    .then( (data) => {this.setState({tasks: data})} )
    .catch('error in Fetch method');
  }

  delete(id){


  this.setState(prevState=>({
                tasks: prevState.tasks.filter(tasks=>tasks !=id)
      }))
  }


  componentDidMount(){
    this.getAll();
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
                            />
		    					)
		    			}
    		
                </tbody>
            </table>
    	); 
  } 
} 
 
export default Tasks
