import React from 'react';
import ReactModal from 'react-modal';

const Modal = (props) => (
  <ReactModal
    isOpen={props.selectedOption}
    onRequestClose={props.handleClearSelection}
    contentLabel={`Selected option is ${props.selectedOption}`}
    closeTimeoutMS={50}
  >
    <h2>Selected Option</h2>
    <p>{props.selectedOption}</p>
    <button 
      onClick={props.handleClearSelection}
    >
      Close
    </button>
  </ReactModal>
)

export default Modal