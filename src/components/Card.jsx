import React, { useState } from 'react'
import './card.css'
import { Data } from './Data'

function Card() {

    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    const handleNextClick = () => {
        if (index < Data.length - 1) {
            setIndex(prevIndex => prevIndex + 1);
        }
    };

    const handlePreviousClick = () => {
        if (index > 0) {
            setIndex(prevIndex => prevIndex - 1);
        }
    };


    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let data = Data[index];

    return (
        <>
            <button onClick={handlePreviousClick} disabled={index === 0}>
                Previous
            </button>


            <div className='card-holder' >
                <img src={data.url} alt={data.alt} />
                <h3 >
                    {data.name}
                </h3>
                <button onClick={handleMoreClick}>
                    {showMore ? 'Hide' : 'Show'} details
                </button>

                {showMore &&
                    <>
                        <p>{data.description}</p>
                        <i>{data.artist}</i>
                        <br />
                        <button className='btn'>Add to favorites</button>

                    </>


                }



            </div>

            <h3>({index + 1} of {Data.length})</h3>

            <button onClick={handleNextClick} disabled={index === Data.length - 1}>
                Next
            </button>




        </>

    )
}

export default Card