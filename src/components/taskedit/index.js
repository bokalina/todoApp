import React from 'react';  
import './style.css'  
 
class TaskEdit extends React.Component { 
  constructor(props){ 
    super(props)

    this.state={

    	tasks:[]
    	// editing: null
    } 
  } 

  // toggleEditing(id){

  // 	this.setState({editing : task.id });
  // }

EditTask(task){

	if (this.state.tasks===task.id){

		return <li key= {item.id}>

		<GridRow>
		<GridColumn>
		<input 
		onKeyDown={this.handleEdit}
		type="text"
		ref={task.id}
		name="description"
		defaultValue={ task.id }/>
		</GridColumn>

		<GridColumn>
		<input 
		onKeyDown={this.handleEdit}
		type="text"
		ref={task.id}
		name="description"
		defaultValue={ task.title }/>
		</GridColumn>

		 </GridRow> </li>


	}else {


		return <li onClick={this.EditTask.bind(task.id)}
		key={task.id}>
		{task.id}  {task.text} </li>
	}
}




  render(){ 

    return ( <ul>

    {this.props.tasks.map((task=>{

    	return this.EditTask(task);
    }) 

    </ul>);
  } 
} 
 
export default TaskEdit
