import React from 'react';  
import './style.css'  
 
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
        }).then(console.log('successful addition'))

  }
 
  render(){
    const assignees = ['Antonette', 'Bret', 'Samantha', 'Karianne', 'Kamren', 'Leopoldo_Corkery', 'Elwyn.Skiles',
                        'Maxime_Nienow', 'Delphine', 'Moriah.Stanton'];

    return (
    	<form onSubmit={this.onSubmit}>
    		<input type="text" name="description" placeholder="Description"/>
        <select name="assignee">
        {assignees.map((user, index)=> <option key={index} value={user}>{user}</option>)}
        </select>
    		<input type = "submit" value="ADD" />
    	</form>
    	) 
  } 
} 
 
export default TaskAdd
