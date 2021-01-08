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
        We've received your ballot. Thank you for voting!
        <button onClick={props.onClose}>X</button>
      </div>
    </div>
  )
}

export default Modal;
