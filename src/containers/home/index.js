import React from 'react';  
import './style.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Task from '../../components/task';
import Tasks from '../../components/tasks';
import TaskAdd from '../../components/taskadd';
import UserDetail from '../../components/userdetail';
 
class Home extends React.Component { 
   constructor(props){ 
    super(props);
    this.state={tasks:[]};

    this.getAll = this.getAll.bind(this);
    this.delete=this.delete.bind(this);
    this.edit=this.edit.bind(this);
    this.add=this.add.bind(this);
    }

  getAll(){
    fetch('http://anticni.pythonanywhere.com/api/tasks/all')
    .then( response => response.json() )
    .then( (data) => {this.setState({tasks: data})} )
    .catch('error in Fetch method');
  }

  delete(id){

    debugger;
  this.setState(prevState=>({
                tasks: prevState.tasks.filter(tasks=> tasks.id != id)
      }))
  }

  edit(id, assignee, desc){
    
  const editTask = this.state.tasks.map(task => {
                    if (task.id === id) {
                      task = {...task, assignee: assignee, description: desc };
                    }
                    return task;
                    });
  this.setState({tasks:editTask})
  }

  add(assignee, desc){
    const newtask = {
      "assignee": assignee,
      "description": desc,
      "done": null,
      "id": this.state.tasks[this.state.tasks.length-1].id+1
      };

    this.setState(prevState => ({
  tasks: [...prevState.tasks, newtask]
    }));
  }


  componentDidMount(){
    this.getAll();

  }


 
  render(){
    return(
      <div>
      <div className="header">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/users">Assignee List</Link>
      </div>
        <h1>Tasks List</h1>
        <TaskAdd add={this.add}/>
        <Tasks tasks={this.state.tasks}/>
      </div>
    );
  }
} 
 
export default Home