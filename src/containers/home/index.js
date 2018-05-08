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
    this.state={tasks:[], isValid:sessionStorage.getItem('isValid')};

    this.getAll = this.getAll.bind(this);
    this.delete=this.delete.bind(this);
    this.edit=this.edit.bind(this);
    this.add=this.add.bind(this);
    this.checkbox=this.checkbox.bind(this);
    }

  getAll(){
    fetch('https://anticni.pythonanywhere.com/api/tasks/all')
    .then( response => response.json() )
    .then( (data) => {this.setState({tasks: data})} )
    .catch('error in Fetch method');
  }

  delete(id){
  this.setState(prevState=>({
                tasks: prevState.tasks.filter(tasks=> tasks.id != id)
      }))
  }

  edit(id, assignee, desc, done){
    
  const editTask = this.state.tasks.map(task => {
                    if (task.id === id) {
                      task = {...task, assignee: assignee, description: desc, done: done };
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

  checkbox(id){
    const editTask = this.state.tasks.map(task => {
                    if (task.id === id) {
                      task = {...task, done : "true" };
                    }
                    return task;
                    });
    this.setState({tasks:editTask})
  }

  componentDidMount(){
    this.getAll();

  }


 
  render(){
    if(!this.state.isValid || this.state.isValid == null){
      return <Redirect to="/login"/>
    }

    return(
      <div>
      <div className="navbar">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/">Home</Link></li>
          <li className="nav-item"><Link to="/login">Login</Link></li>
          <li className="nav-item"><Link to="/users">Assignees</Link></li>
          <li className="nav-logo">ToDo App</li>
        </ul>
      </div>
        <TaskAdd add={this.add}/>
        <Tasks tasks={this.state.tasks} add={this.add} edit={this.edit} delete={this.delete} checkbox={this.checkbox}/>
        <div className="bot">
        <div> PZORG® </div>
        </div>
      </div>
    );
  }
} 
 
export default Home