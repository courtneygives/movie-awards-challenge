import React from 'react';
import './Nominee.css'

const Nominee = (props) => {
let className = 'nominee'
if (props.isSelected) {
  className = 'nominee selected'
}
  return (
    <div
    className={className}
    id={props.id}
    onClick={() => props.setSelected(props.id)}
    >
      <h2>{props.title}</h2>
      <div className='nominee-poster'>
        <img src={props.photoUrL} alt={props.id} />
      </div>
    </div>
  )
}

export default Nominee;
