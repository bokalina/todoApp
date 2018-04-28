import React from 'react';  
import './style.css' 

import TaskCompleted from '../taskcompleted';
import TaskEdit from '../taskedit';
import TaskDelete from '../taskdelete';

 
class Task extends React.Component { 
  constructor(props){ 
    super(props) 
  }
 
  render(){ 
        const TableRow =
            <tr>
              <td><TaskCompleted done={this.props.done}/></td>
              <td>{this.props.id}</td>
              <td>{this.props.description}</td>
              <td>{this.props.assignee}</td>
              <td><TaskEdit id={this.props.id}
                            description={this.props.description}
                            assignee={this.props.assignee}/>
              </td>
              <td><TaskDelete id={this.props.id}
                              delete={this.props.delete}/>
              </td>
            </tr>
        return TableRow;
    
  } 
} 
 
export default Task
