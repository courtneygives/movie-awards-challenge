import React from 'react';
import './Nominee.css'

const Nominee = (props) => {
let className = 'nominee'
if (props.isSelected) {
  className = 'nominee selected'
}
  return (
    <div className={className} id={props.id}>
      <h2>{props.title}</h2>
      <img src={props.photoUrL} alt={props.id} />
      <button onClick={() => props.setSelected(props.id)}>
       Vote
     </button>
    </div>
  )
}

export default Nominee;
