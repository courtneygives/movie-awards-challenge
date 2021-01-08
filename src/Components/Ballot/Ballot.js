import React, { useState, useEffect } from 'react';
import Api from '../../Api/Api';

const Ballot = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    Api.getBallotData().then((data) => setData(data))
  });

  return (
    <div className='ballot'>
      'Your Code Goes Here'
      {JSON.stringify(data)}
    </div>
  )
}

export default Ballot;
