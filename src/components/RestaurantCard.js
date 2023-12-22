import { RESTAURANT_IMAGE_URL } from '../utils/constants';

export const RestaurantCard = (props) => {
    const { restList } = props;
    const { 
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId,
        sla
     } = restList?.info;
    return (
        <div className='rest-card'>
            <img 
                className='rest-img'
                src={`${RESTAURANT_IMAGE_URL}/${cloudinaryImageId}`}
                alt='rest logo'></img>
            <h5>{name}</h5>
            <h5>{avgRating} * {sla.slaString}</h5>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwo}</p>
        </div>
    )
}

export default RestaurantCard;