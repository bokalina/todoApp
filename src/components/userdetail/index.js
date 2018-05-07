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
      <th>NAME</th>
      <th>USERNAME</th>
      <th>EMAIL</th>
      <th>ADDRESS</th>
      <th>PHONE</th>
      <th>WEBSITE</th>
      <th>COMPANY NAME</th>
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
        street={user.address.street}
        suite={user.address.suite}
        city={user.address.city}
        zipcode={user.address.zipcode}
        phone={user.phone}
        website={user.website}
        company={user.company.name}
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
  <td>{props.street},{props.suite},{props.city},{props.zipcode}</td>
  <td>{props.phone}</td>
  <td>{props.website}</td>
  <td>{props.company}</td>
 </tr>
);

export default UserDetail;
