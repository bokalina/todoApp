import React from 'react';  
import './style.css';

import Tasks from '../../components/tasks';
import TaskAdd from '../../components/taskadd';
import UserDetail from '../../components/userdetail';
 
class Home extends React.Component { 
  constructor(props){ 
    super(props) 
  } 
 
  render(){ 
    return <div>
            Home
            <Tasks/>
            <TaskAdd/>
            <UserDetail/>
           </div>; 
  } 
} 
 
export default Home