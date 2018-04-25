import React from 'react';  
import './style.css';
import Task from '../../components/task';
import Tasks from '../../components/tasks';
import TaskAdd from '../../components/taskadd';
import UserDetail from '../../components/userdetail';
import TaskDelete from '../../components/taskdelete';
 
class Home extends React.Component { 
  constructor(props){ 
    super(props) 
    this.state={

      tasks:[]
    }

    this.addTask=this.addTask.bind(this)
    this.getTask=this.getTask.bind(this)
    this.delete=this.delete.bind(this)
  } 
 
 delete(id){

this.setState(prevState=>({

  tasks: prevState.tasks.filter(tasks=>tasks !=id)
}))


 }

addTask(title,event){
     const newTask={ id: (this.state.tasks.length +1),title: title}
     this.setState({

      tasks: [...this.state.tasks, newTask]
     })



}



getTask(){

fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response.json())
    .then((data) => this.setState({tasks: data}))
    .catch((error) => alert('Something went wrong'))



}

 componentDidMount(){
    console.log('componentDidMount')
    this.getTask();
  }


  render(){ 
    return (<div>
            <h1>Tasks List</h1>
            <TaskAdd onSubmit={this.addTask}/>
            <Tasks tasks={this.state.tasks}/>
            <TaskDelete delete={this.delete} tasks={this.state.tasks}/>
           </div>

           ); 
  } 
} 
 
export default Home