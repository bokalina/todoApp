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
    <table className="tableUser">
      <thead className="header">
     <tr className="headerRow">
      <th className="h1">ID</th>
      <th className="h1">NAME</th>
      <th className="h1">USERNAME</th>
      <th className="h1">EMAIL</th>
      <th className="h1">ADDRESS</th>
      <th className="h1">PHONE</th>
      <th className="h1">WEBSITE</th>
      <th className="h1">COMPANY NAME</th>
     </tr>
    </thead>
    <tbody className="tableBody">
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
 <tr className="tableRow">
  <td className="cell">{props.id}</td>
  <td className="cell">{props.name}</td>
  <td className="cell">{props.username}</td>
  <td className="cell">{props.email}</td>
  <td className="cell">{props.street},{props.suite},{props.city},{props.zipcode}</td>
  <td className="cell">{props.phone}</td>
  <td className="cell">{props.website}</td>
  <td className="cell">{props.company}</td>
 </tr>
);

export default UserDetail;
