import { useDispatch } from "react-redux";
import { RESTAURANT_IMAGE_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const Card = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddClick = (item) => {
        // dispatch an action
        dispatch(addItem(item));
    }

    return (
        <div className="p-0">
            {items?.map((item) => {
                const {
                    name,
                    price,
                    description,
                    imageId,
                    id
                } = item?.card?.info;

                return (
                    <div key={id} className="card-container flex justify-between items-center mb-4 pb-4 border-b border-inherit-400 last:border-b-0 last:pb-0">
                        <div className="left-section w-10/12">
                            <h3 className="card-name text-sm text-bold text-slate-800 break-words mb-0">{name}</h3>
                            <p className="card-price text-sm text-bold text-slate-600 break-words mb-2">Rs {price/100}</p>
                            <p className="card-description text-slate-400 text-sm mb-0 break-words">{description}</p>
                        </div>
                        {imageId && <div className="right-section ml-8 relative w-2/12">
                            <img className="card-image w-46 rounded h-auto" src={`${RESTAURANT_IMAGE_URL}/${imageId}`}/>
                            <button className="add-button text-white bg-rose-500 p-2 shadow absolute rounded -bottom-3" onClick={() => handleAddClick(item)}>Add +</button>
                        </div>}
                    </div>
                )
            })}
        </div>
    )
};

export default Card;
