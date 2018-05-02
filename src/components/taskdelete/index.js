import React from 'react';  
import './style.css'  
 
class TaskDelete extends React.Component { 
  constructor(props){ 
    super(props)
    this.delete = this.delete.bind(this);
  } 

  delete(){
    console.log(this.props.id);
    const url = `https://anticni.pythonanywhere.com/api/tasks/delete/${this.props.id}`;

    fetch(url, {
              method: 'get'
        }).then(console.log('successful deletion'))

    this.props.delete(this.props.id);

  }



 
  render(){ 
    return ( <div>
        <button onClick={this.delete}>DELETE</button>
        </div>


        ); 
  } 
} 
 
export default TaskDelete