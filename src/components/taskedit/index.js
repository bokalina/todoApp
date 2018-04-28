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

    return ( <div>

    <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Edit Task"
        >
 
          <h2 ref={subtitle => this.subtitle = subtitle}>Edit Task:</h2>
          <button onClick={this.closeModal}>close</button>
          
          <form>
            <input type="text" defaultValue={this.props.description}/>
            <input type="text" defaultValue={this.props.assignee} />
            <input type="submit" value="Save"/>
          </form>
        </Modal>

        </div> );
  } 
} 
 
export default TaskEdit