import React from 'react';  
import './style.css';

import Task from '../../components/task';
import Tasks from '../../components/tasks';
import TaskAdd from '../../components/taskadd';
import UserDetail from '../../components/userdetail';
 
class Home extends React.Component { 
  constructor(props){ 
    super(props)
    this.state={
      tasks:[]
      // tasks:[
      //   {
      //     "userId": 1,
      //     "id": 1,
      //     "title": "delectus aut autem",
      //     "completed": false
      // },
      // {
      //     "userId": 1,
      //     "id": 2,
      //     "title": "quis ut nam facilis et officia qui",
      //     "completed": false
      // },
      // {
      //     "userId": 1,
      //     "id": 3,
      //     "title": "fugiat veniam minus",
      //     "completed": false
      // },
      // {
      //     "userId": 1,
      //     "id": 4,
      //     "title": "et porro tempora",
      //     "completed": true
      // },
      // ]
    }
    this.addTask = this.addTask.bind(this)
    this.getTask = this.getTask.bind(this) 
  }

  addTask(title,event){
    const newTask = { id: (this.state.tasks.length + 1), title: title}
    this.setState({
      tasks:[...this.state.tasks, newTask]
    })
  }

  getTask(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => console.log(response.json()))
    .then((data) => this.setState({tasks: data}))
    .catch((error) => alert('Something went wrong'))
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.getTask();
  }

 
  render(){
    return(
      <div>
        <h1>Tasks List</h1>
        <TaskAdd onSubmit={this.addTask}/>
        <Tasks tasks={this.state.tasks}/>
      </div>
    );
  }
} 
 
export default Home