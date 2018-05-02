import React from 'react';  
import './style.css'  
 
class UserDetail extends React.Component { 
  constructor(props){ 
    super(props)
    this.state={
    	users:[]
    };
    this.getUsers=this.getUsers.bind(this)
  }

  getUsers(){
  	fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response) => console.log(response.json()) )
    .then( (data) => {this.setState({users: data})} )
    .catch('error in Fetch method');
  }

  componentDidMount(){
  	console.log('componentdidmount')
  	this.getUsers();
  }

  render(){
  	return(
  		<table>
  			<thead>
                    <tr>
                      <th>ID</th>
                      <th>name</th>
                      <th>username</th>
                      <th>email</th>
                    </tr>
                </thead>
  		</table>
  		);
  }
}
 
export default UserDetail
