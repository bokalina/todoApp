import React from 'react';  
import './style.css';
import Hometask from '../../containers/hometask';
import AddTask from '../../components/add_task';

 
class TaskApp extends React.Component { 
  constructor(props){ 
    super(props);
    this.state={
    	// tasks:[]
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
    this.addTask = this.addTask.bind(this)
  } 

  addTask(title,event){
  	const newTask = { id: (this.state.tasks.length + 1), title: title}
  	this.setState({
  		tasks:[...this.state.tasks, newTask]
  	})
  }

  
  // componentDidMount() {
  // 	fetch('https://jsonplaceholder.typicode.com/todos')
  // 	.then(function(response){
  // 		console.log('componentDidMount');
  // 		console.log(response.json());
  // 		return response;
  // 	})
  	
  	
  // 	.catch(error => console.log('parsing failed', error))

  // }
 
  render(){ 
    return (
    	<div>
			<h1>Tasks List</h1>
			<AddTask onSubmit={this.addTask}/>
	    	<Hometask tasks={this.state.tasks}/>
    	</div>
    	); 
  } 
} 
 
export default TaskApp;
