import React from 'react';  

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
    <button onClick={this.openModal}>{this.props.name}</button>
      <Modal
       isOpen={this.state.modalIsOpen}
       onAfterOpen={this.afterOpenModal}
       onRequestClose={this.closeModal}
       ariaHideApp={false}
       style={customStyles}
       contentLabel="Edit Task">
   
       <h2 ref={subtitle => this.subtitle = subtitle}></h2>

       <button onClick={this.closeModal}>close</button>
       
       <form>{this.state.user.map((user, index)=> 
        <ul key={index}>
        <li>{user.name}</li>
        <li>{user.username}</li>
        <li>{user.address.street}</li>
        <li>{user.email}</li>
        </ul>)}

       </form>
      </Modal>
    </div> 
    );
 }

  } 




 
export default User