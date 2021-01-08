import React, { useState} from 'react';
import './Category.css';
import Nominee from '../Nominee/Nominee';

const Category = (props) => {
  const [selected, setSelected] = useState('');

  let nominees = props.items.map((nominee) => {
    nominee.isSelected = (nominee.id === selected)
    return (
      <Nominee {...nominee} key={nominee.id} setSelected={setSelected} />
    )
  })

  return (
    <div className='category' id={props.id}>
      <header className='category-header'>
        <h1>{props.title}</h1>
      </header>
      <div className="nominees-container">
          {nominees}
      </div>
    </div>
  )
}

export default Category;
