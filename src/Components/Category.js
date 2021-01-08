import React from 'react';
import Nominee from './Nominee';

const Category = (props) => {

  let nominees = props.items.map((nominee) =>
      <Nominee {...nominee} key={nominee.id}/>
    )

  return (
    <div className='category' id={props.id}>
    <h1>{props.title}</h1>
      {nominees}
    </div>
  )
}

export default Category;
