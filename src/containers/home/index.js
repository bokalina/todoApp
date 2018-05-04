import React from 'react';  
import './style.css';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

import Task from '../../components/task';
import Tasks from '../../components/tasks';
import TaskAdd from '../../components/taskadd';
import UserDetail from '../../components/userdetail';
 
class Home extends React.Component { 
  constructor(props){ 
    super(props)
    this.state={
      tasks:[]
    }
 
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
        <TaskAdd onSubmit={this.addTask}/>
        <Tasks tasks={this.state.tasks}/>
      </div>
    );
  }
} 
 
export default Home