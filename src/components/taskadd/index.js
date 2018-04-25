import React from 'react';  
import './style.css'  
 
class TaskAdd extends React.Component { 
  constructor(props){ 
    super(props) 
    this.state={

    	title: ""
    }

    this.onChange=this.onChange.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
  } 
 

  onChange(event){

     
      this.setState({title: event.target.value})
       

  }


  onSubmit(event){
     // event.prevendDefault();
     this.props.onSubmit(this.state.title,event)

  }

  render(){ 
    return (

    <form onSubmit={this.onSubmit}>
    <input type="text" value={this.state.title} onChange={this.onChange}/>
    <input type="submit" value="ADD"/> 

    </form>
    )
  } 
} 
 
export default TaskAdd
