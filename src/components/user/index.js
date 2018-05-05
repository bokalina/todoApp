import React from 'react';  
import './style.css';

import Modal from "react-modal";


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
class User extends React.Component { 
  constructor(props){ 
    super(props)
   

     
    this.state = {
      users: [],
        user:[],  
      modalIsOpen: false
    };

 

    this.getOne=this.getOne.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  getOne(){

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState(() => ({
   user: json.filter(user => user.username == this.props.name)
  }))).then(this.setState({fetchDone:true}))
 

 }

componentDidMount(){
console.log('componentdidmount')
  this.getOne();
}
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

render(){

  return ( 

   <div>
    <a href="#" onClick={this.openModal}>{this.props.name}</a>
      <Modal
       isOpen={this.state.modalIsOpen}
       onAfterOpen={this.afterOpenModal}
       onRequestClose={this.closeModal}
       ariaHideApp={false}
       style={customStyles}
       contentLabel="Edit Task">
   
       <h2 ref={subtitle => this.subtitle = subtitle}></h2>

       <button className="closebutton" onClick={this.closeModal}>X</button>
       
       <form>{this.state.user.map((user, index)=> 
        <ul className="a" key={index}>
          <li><b>Username:</b> {user.username}</li>
          <li><b>Full name:</b> {user.name}</li>
          <li><b>Email:</b> {user.email}</li>
          <li><b>Phone number:</b> {user.phone}</li>
          <li><b>Website:</b> {user.website}</li>
          <li><b>Address:</b>
            <ul>
              <li><i>street:</i> {user.address.street}</li>
              <li><i>suite:</i> {user.address.suite}</li>
              <li><i>city:</i> {user.address.city}</li>
              <li><i>zipcode:</i> {user.address.zipcode}</li>
            </ul>
          </li>
          <li><b>Company name:</b> {user.company.name}</li>
        </ul>)}
       </form>
      </Modal>
    </div> 
    );
 }
} 


export default User