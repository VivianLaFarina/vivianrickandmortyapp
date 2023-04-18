import React from 'react'

const Location = ({location}) => {
  return (
        <section className='border-2 absolute top-[500px] lg:top-[680px] lg:text p-4  shadow-white shadow-md'>
           <h2>{location?.name}</h2> 
           <ul>
            <li>Type: {location?.type}</li>
            <li>Dimension: {location?.dimension}</li>
            <li>Population: {(location?.residents.length) + 1 }</li>
           </ul>
        </section>
  )
}

export default Location