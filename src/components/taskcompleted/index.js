import React from 'react';  
import './style.css'  
 
class TaskCompleted extends React.Component { 
  constructor(props){ 
    super(props);
    this.state = {
        checked : this.props.done
    }

    this.onChange = this.onChange.bind(this); 
  } 

  onChange(event){
    console.log("onChange@taskcompleted");
    
    const data = new FormData();
    data.append('done', 'true');

    const url = `https://anticni.pythonanywhere.com/api/tasks/isdone/${this.props.id}`;

    fetch(url, {
              method: 'POST',
              body: data
        }).then(function(response) {
        console.log("ok");
    }).catch(function(error) {
        alert("Server Error\nPlease Try Again");
        return;
    });

    this.setState({checked: true});
    this.props.checkbox(this.props.id);
    


  }
 
  render(){ 
    return <input id="checkBox" type="checkbox" checked={this.state.checked} onChange={this.onChange} />
  } 
} 
 
export default TaskCompleted