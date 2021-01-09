import React from 'react';
import './Modal.css';

const Modal = (props) => {
let className = 'modal';
if (props.open) {
  className = 'modal visible'
}
  return (
    <div className={className}>
      <div className='message-box'>
        <p>We've received your ballot. Thank you for voting!</p>
        <span className='close-modal' onClick={props.onClose}>X</span>
      </div>
    </div>
  )
}

export default Modal;
