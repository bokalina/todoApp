import React from 'react';  
import './style.css';
import Modal from "react-modal";

import AssigneeInput from '../assignee_input';

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
 
class TaskEdit extends React.Component { 
  constructor(props){ 
    super(props)

     
    this.state = {
        tasks:[],
      modalIsOpen: false
    };
 
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.submitModal = this.submitModal.bind(this);
  }
 
  openModal() {
    this.setState({modalIsOpen: true});
  }
 
  afterOpenModal() {
    // references are now sync'd and can be accessed.
    return;
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  submitModal(event){
    event.preventDefault();
    const data = new FormData(event.target);
    const url = `https://anticni.pythonanywhere.com/api/tasks/edit/${this.props.id}`;
    
    console.log("submitModal@taskedit")
    
    fetch(url, {
              method: 'POST',
              body: data
        }).then(function(response) {
        console.log("ok");
    }).catch(function(error) {
        alert("Server Error\nPlease Try Again");
        return;
    });

    const description = event.target.elements.description.value;
    const assignee = event.target.elements.assignee.value;
    const done = event.target.elements.done.value;

    this.props.edit(this.props.id, assignee, description, done);
    this.closeModal();
  }

 
 




  render(){ 

    return ( <div>

    <button onClick={this.openModal}>EDIT</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel="Edit Task"
        >
 
          <h3>Edit Task:</h3>
          <button className="closebutton" onClick={this.closeModal}>X</button>
          
          <form className="editInput" onSubmit={this.submitModal}>
            <label htmlFor="description" className="inputs">Description: </label>
            <input type="text" name="description" defaultValue={this.props.description}/>
            <label htmlFor="assignee" className="inputs">Assignee: </label>
            <AssigneeInput className="edit-select" defaultValue={this.props.done}/>
            <label htmlFor="done" className="inputs">Completed:</label>
            <select className="edit-select" name="done" defaultValue={this.props.done}>
              <option value="true">True</option>
              <option value="false">False</option>
            </select>
            <input type="submit" className="inputs" value="Save"/>
          </form>
        </Modal>

        </div> );
  } 
} 
 
export default TaskEdit