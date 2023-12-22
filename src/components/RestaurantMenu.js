import Shimmer from "../components/Shimmer";
import Card from "./Card";
import { Accordion } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";

const RestaurantMenu = () => {
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

    const cardsList = restaurantMenuData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(itemCard => {
        return itemCard?.card?.card?.hasOwnProperty('itemCards');
    });

    return (
        <div className="restaurant-menu-items">
            <h2 className="restaurant-menu-heading padding-20">{name}</h2>
            <p className="restaurant-menu-cuisines padding-20">{cuisines.join(', ')} - {costForTwoMessage}</p>
            <p className="restaurant-area-name padding-20">{areaName}, {sla.lastMileTravelString}</p>
            <ul className="restaurant-menu-list">
                <Accordion defaultActiveKey={cardsList && cardsList[0]?.card?.card?.title} flush>
                    {(cardsList && cardsList.length > 0) && cardsList.map(cardList => {
                        const {
                            title,
                            itemCards
                        } = cardList?.card?.card;

                        return (
                            <Accordion.Item eventKey={title} key={title}>
                                <Accordion.Header>{`${title} (${itemCards.length})`}</Accordion.Header>
                                <Accordion.Body>
                                    {itemCards?.map(itemCard => {
                                        return (
                                            <div className="card-wrapper"><Card itemCard={itemCard} key={itemCard.card.info.id} /></div>
                                        )
                                    })}
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
                </Accordion>
            </ul>
        </div>
    )
};

export default RestaurantMenu;