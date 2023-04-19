import React from 'react'

const Location = ({location}) => {
  return (
        <section className='border-2 absolute top-[400px] lg:top-[730px] lg:text px-10 py-4  shadow-lime-400 shadow-md rounded-md'>
           <h2 className='py-2 text-lime-300'>{location?.name}</h2> 
           <ul className=' text-lime-300'>
            <li>Type: {location?.type}</li>
            <li>Dimension: {location?.dimension}</li>
            <li>Population: {(location?.residents.length) + 1 }</li>
           </ul>
        </section>
  )
}

export default Location