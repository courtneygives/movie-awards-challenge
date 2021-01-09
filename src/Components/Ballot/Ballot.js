import React, { useState, useEffect } from 'react';
import './Ballot.css';
import Api from '../../Api/Api';
import Category from '../Category/Category';
import Modal from '../Modal/Modal';

const Ballot = () => {
  const [data, setData] = useState({items:[]});

  useEffect(() => {
    Api.getBallotData().then((data) => setData(data))
  });

  let categories = data.items.map((category) =>
      <Category {...category} key={category.id}/>
    )

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(open)
  };

  return (
    <div className='ballot'>
      {categories}

      <button
      type='button'
      className='submit-button'
      onClick={handleOpen}
      >
        Submit Ballot
      </button>
      <Modal open={open} onClose={handleClose}/>

    </div>
  )
}

export default Ballot;
