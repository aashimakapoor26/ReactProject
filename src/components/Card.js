import { RESTAURANT_IMAGE_URL } from "../utils/constants";

const Card = (props) => {
    const { card } = props.itemCard;
    const {
        name,
        price,
        description,
        imageId,
        itemAttribute
    } = card?.info;
    console.log(card);
    return (
        <div className="card-container">
            <div className="left-section">
                <h3 className="card-name">{name}</h3>
                <p className="card-price">Rs {price/100}</p>
                <p className="card-description">{description}</p>
            </div>
            {imageId && <div className="right-section">
                <img className="card-image" src={`${RESTAURANT_IMAGE_URL}/${imageId}`}/>
            </div>}
        </div>
    )
}
export default Card;