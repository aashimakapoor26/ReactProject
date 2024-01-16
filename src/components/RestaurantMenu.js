import Shimmer from "../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(0);

    const params = useParams();
    const restaurantMenuData = useRestaurantMenuData(params.resId);

    if (restaurantMenuData === null) return <Shimmer />;

    const {
        name,
        cuisines,
        costForTwoMessage,
        areaName,
        sla
    } = restaurantMenuData?.cards[0]?.card?.card?.info;

    const categories = restaurantMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(itemCard => {
        return itemCard?.card?.card?.hasOwnProperty('itemCards');
    });

    return (
        <div className="w-9/12 m-auto">
            <div className="mb-4">
                <h2 className="text-base p-2 mb-0">{name}</h2>
                <p className="mb-0 text-xs text-slate-400 py-1 px-2">{cuisines.join(', ')} - {costForTwoMessage}</p>
                <p className="mb-0 text-xs text-slate-400 py-1 px-2">{areaName}, {sla.lastMileTravelString}</p>
            </div>
            {categories?.map((category, index) => (
                // Controlled component
                <RestaurantCategory 
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    )
};

export default RestaurantMenu;