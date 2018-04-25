import React from 'react';  
import './style.css' 

 
class Task extends React.Component { 
  constructor(props){ 
    super(props) 
  }
 
  render(){ 
        const TableRow =
            <tr>
              <td>{this.props.completed}</td>
              <td>{this.props.id}</td>
              <td>{this.props.description}</td>
            </tr>
        return TableRow;
    
  } 
} 
 
export default Task
