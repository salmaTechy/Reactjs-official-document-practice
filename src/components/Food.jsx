import React from 'react'
import { Data } from './Data'
import './card.css'

function Food() {
  return (
<div className='card'>
    

    {
        Data.map((item) => (
            <div className='card-holder' key={item.id}>
                <img src={item.url} alt={item.alt} />
                <h3 >
                    {item.name}
                </h3>

                <p>{item.description}</p>
                <i>{item.artist}</i>
                <br />
                <button className='btn'>Add to favorites</button>


            </div>
        ))
    }

</div>  )
}

export default Food