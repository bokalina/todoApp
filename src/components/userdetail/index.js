import React from 'react'; 
import './style.css' ;
 
class UserDetail extends React.Component { 
 constructor(props){ 
  super(props);
  this.getUsers=this.getUsers.bind(this);
  // this.getOne=this.getOne.bind(this);
  this.state = {
    users: [],
    user: {},
  } } 


// getOne(username){
//   this.setState( prevState => ({
//  user: prevState.users.filter(users => users.username == username) } )
// }

  getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState(() => ({
   users: json
  })))
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
    <tbody>
     {
      this.state.users.map((user) => (
       <User
        key={user.id}
        id={user.id}
        name={user.name} 
        username={user.username} 
        email={user.email}
       />
      ))
     }
    </tbody>
    </table>
    );
 }
}
const User = (props) => (
 <tr>
  <td>{props.id}</td>
  <td>{props.name}</td>
  <td>{props.username}</td>
  <td>{props.email}</td>
 </tr>
);

export default UserDetail;
