import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getElementById } from '../selectors/getElementById';

export const Detail = () => {

  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getData(id);
}, [])

const getData =  (id) => {
  const product = getElementById(id);
  setData(product);
}

  return (
    <div>
      <div>
      {data &&
        <div className='detail-container animate__animated animate__fadeInLeft'>
          <div>
            <img 
              className='imgdetail'
              src={data.image_url}
              alt={data.title}
            />
          </div>
          <div className='animate__animated animate__fadeInLeft'>
            <div>Category: {data.category} </div>
            <div>Last update: {data.last_update} </div>
            <div className='description1'> {data.description} </div>
          </div>
        </div>
      }
      </div>
    </div>
  )
}
