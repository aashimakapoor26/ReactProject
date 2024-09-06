import React from 'react';
import { AiFillStar } from "react-icons/ai";

const Star = ({ rating, setRating, readOnly }) => {

    const handleStarClick = (e, star) => {
        e.stopPropagation();
        !readOnly && setRating(star);
    }
    const ratingRounded = Math.floor(rating);

    return (
        [...Array(5)].map((_, index) => {
            return <AiFillStar
                className='star'
                key={index}
                color={ratingRounded > index ? "#ffc107" : "#e4e5e9" }
                onClick={(e) => handleStarClick(e, index+1)}
            />
        })
    )
}

export default Star