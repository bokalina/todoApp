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
    this.subtitle.style.color = '#f00';
  }
 
  closeModal() {
    this.setState({modalIsOpen: false});
  }

  submitModal(event){
    const data = new FormData(event.target);
    const url = `https://anticni.pythonanywhere.com/api/tasks/edit/${this.props.id}`;
    console.log(data);
    debugger;
    // fetch(url, {
    //           method: 'POST',
    //           body: data
    //     }).then(console.log('successful addition'))

    event.preventDefault();
    const description = event.target.elements.description.value;
    const assignee = event.target.elements.assignee.value;

    this.props.edit(this.props.id, assignee, description);
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
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Edit Task:</h2>
          <button onClick={this.closeModal}>close</button>
          
          <form onSubmit={this.submitModal}>
            <label for="description">Description: </label>
            <input type="text" name="description" defaultValue={this.props.description}/>
            <label for="assignee">Assignee: </label>
            <input type="text" name="assignee" defaultValue={this.props.assignee} />
            <input type="submit" value="Save"/>
          </form>
        </Modal>

        </div> );
  } 
} 
 
export default TaskEdit