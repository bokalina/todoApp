import React from 'react';  
import './style.css';

import AssigneeInput from '../assignee_input';
 
class TaskAdd extends React.Component { 
  constructor(props){ 
    super(props) 
    this.state = {
    	title: ""
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(event){
  	this.setState({title: event.target.value})
  }

  onSubmit(event){
  	event.preventDefault();

    const data = new FormData(event.target);
    const url = 'https://anticni.pythonanywhere.com/api/tasks';

    fetch(url, {
              method: 'POST',
              body: data
        }).then(function(response) {
        console.log("ok - added");
    }).catch(function(error) {
        alert("Server Error\nPlease Try Again");
        return;
    });

    const assignee = event.target.elements.assignee.value;
    const description = event.target.elements.description.value;

    this.props.add(assignee, description);

  }
 
  render(){
    

    return (
    	<form onSubmit={this.onSubmit}>
    		<input type="text" name="description" placeholder="Description"/>
        <AssigneeInput defaultValue=""/>
    		<input type = "submit" value="ADD" />
    	</form>
    	) 
  } 
} 
 
export default TaskAdd
