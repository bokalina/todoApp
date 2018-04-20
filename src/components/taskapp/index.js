import React from 'react';  
import './style.css';
import Hometask from '../../containers/hometask';

 
class TaskApp extends React.Component { 
  constructor(props){ 
    super(props);
    this.state={
    	tasks:[
    		{
			    "userId": 1,
			    "id": 1,
			    "title": "delectus aut autem",
			    "completed": false
			},
			{
			    "userId": 1,
			    "id": 2,
			    "title": "quis ut nam facilis et officia qui",
			    "completed": false
			},
			{
			    "userId": 1,
			    "id": 3,
			    "title": "fugiat veniam minus",
			    "completed": false
			},
			{
			    "userId": 1,
			    "id": 4,
			    "title": "et porro tempora",
			    "completed": true
			},
    	]
    } 
  } 
 
  render(){ 
    return (
    	<div>
			<h1>Tasks List</h1>
	    	<Hometask tasks={this.state.tasks}/>
    	</div>
    	); 
  } 
} 
 
export default TaskApp;
