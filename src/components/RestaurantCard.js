import { RESTAURANT_IMAGE_URL } from '../utils/constants';

export const RestaurantCard = (props) => {
    const { restList } = props;
    const { 
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId,
        id,
        sla
     } = restList?.info;
    return (
        <div className='rest-card'>
            <img 
                className='rest-img'
                src={`${RESTAURANT_IMAGE_URL}/${cloudinaryImageId}`}
                alt='rest logo'></img>
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla.slaString}</h5>
        </div>
        )
}

export default RestaurantCard;