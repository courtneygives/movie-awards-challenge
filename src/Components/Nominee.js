import React from 'react';

const Nominee = (props) => {

  return (
    <div className='nominee' id={props.id}>
    <h2>{props.title}</h2>
    <img src={props.photoUrL} alt={props.id} />
    </div>
  )
}

export default Nominee;
