import React from 'react';  
import './style.css' 

import TaskCompleted from '../taskcompleted';
import TaskEdit from '../taskedit';
import TaskDelete from '../taskdelete';
import User from '../user';

 
class Task extends React.Component { 
  constructor(props){ 
    super(props) 
  }
 
  render(){ 
        const TableRow =
            <tr className={this.props.done ? 'Completed' : 'notCompleted'}>
              <td><TaskCompleted id={this.props.id} done={this.props.done} checkbox={this.props.checkbox}/></td>
              <td>{this.props.id}</td>
              <td>{this.props.description}</td>
              <td><User name={this.props.assignee}/></td>
              <td><TaskEdit id={this.props.id}
                            description={this.props.description}
                            assignee={this.props.assignee}
                            done={this.props.done}
                            edit={this.props.edit}/>
              </td>
              <td><TaskDelete id={this.props.id}
                              delete={this.props.delete}/>
              </td>
            </tr>
        return TableRow;
    
  } 
} 
 
export default Task
