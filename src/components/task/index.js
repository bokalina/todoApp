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
              <td><TaskCompleted/></td>
              <td>{this.props.id}</td>
              <td>{this.props.description}</td>
              <td>Not implemented</td>
              <td><TaskEdit/></td>
              <td><TaskDelete/></td>
            </tr>
        return TableRow;
    
  } 
} 
 
export default Task
