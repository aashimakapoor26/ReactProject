import { useState } from 'react';
import { RESTAURANT_IMAGE_URL } from '../utils/constants';
import Star from './Star';

export const RestaurantCard = (props) => {
    const { restList } = props;

    const { 
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId,
        sla
     } = restList;
    const [rating, setRating] = useState(avgRating);

    return (
        <div className='rest-card w-52 p-2 my-1 mx-0 hover:shadow cursor-pointer duration-300'>
            <img
                className='rest-img w-full h-36 rounded mb-0.5'
                src={`${RESTAURANT_IMAGE_URL}/${cloudinaryImageId}`}
                alt='rest logo'></img>
            <h5 className='text-sm font-bold mb-0.5 text-ellipsis whitespace-nowrap overflow-hidden'>{name}</h5>
            <div className='starRatingWrapper'>
                <Star rating={rating} setRating={setRating} readOnly={true} />
            </div>
            <h5 className='text-sm font-bold mb-0.5 text-ellipsis whitespace-nowrap overflow-hidden'>{sla.slaString}</h5>
            <p className='text-xs mb-0.5 text-ellipsis whitespace-nowrap overflow-hidden'>{cuisines.join(", ")}</p>
            <p className='text-xs mb-0.5 text-ellipsis whitespace-nowrap overflow-hidden'>{costForTwo}</p>
        </div>
    )
}


// Higher order component
export const withBestSellerLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className='ribbon absolute bg-rose-500 text-white'>Best Seller</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;