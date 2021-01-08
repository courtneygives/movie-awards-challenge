import React, { useState, useEffect } from 'react';
import Api from '../Api/Api';
import Category from './Category'


const Ballot = () => {
  const [data, setData] = useState({items:[]});

  useEffect(() => {
    Api.getBallotData().then((data) => setData(data))
  });

  let categories = data.items.map((category) =>
      <Category {...category} key={category.id}/>
    )


  return (
    <div className='ballot'>
      {categories}
    </div>
  )
}

export default Ballot;
