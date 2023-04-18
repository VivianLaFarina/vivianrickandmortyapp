import React from 'react'

const Location = ({location}) => {
  return (
        <section>
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