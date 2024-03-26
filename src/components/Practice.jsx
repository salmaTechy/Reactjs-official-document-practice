import React, { useState } from 'react'
import { Data } from './Data';
function Practice() {

    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNext() {
        if (index < Data.length - 1) {
            setIndex(prev => prev + 1);
        }
        else {
            setIndex(0);
        }
    }

    function handlePrevious() {
        if (index > 0) {
            setIndex(prev => prev - 1);
        }
        else {
            setIndex(0)
        }
    }

    function handleShow() {
        setShowMore(!showMore);

    }



    let data = Data[index];

    return (
        <div className='card-holder'>
            <div className='btn-holder'>
            <button  onClick={handlePrevious} disabled={index === 0}>Previous</button>
            <button   onClick={handleNext} disabled={index >= Data.length - 1}>Next</button>

            </div>
            <br />

            <img src={data.url} alt="" />
            <h1>{data.name}</h1>
            <button className='btn'  onClick={handleShow}>{showMore ? 'Hide' : 'Show'} details</button>
            {showMore && <p>{data.description}</p>}
            

        </div>
    )
}

export default Practice