import React from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement(document.getElementById('root'));

const Modal = (props) => (
  <ReactModal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelection}
    contentLabel={`Selected option is ${props.selectedOption}`}
    closeTimeoutMS={50}
    className="modal"
  >
    <h2 className="modal__title">Randomly Selected Option:</h2>
    <p className="modal__body">{props.selectedOption}</p>
    <button 
      className="button"
      onClick={props.handleClearSelection}
    >
      Close
    </button>
  </ReactModal>
)

export default Modal