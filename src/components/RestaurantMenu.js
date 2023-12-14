import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer";
import Card from "./Card";
import { Accordion } from "react-bootstrap";

const RestaurantMenu = () => {

    const [restaurantMenuData, setRestaurantMenuData] = useState(null);

    useEffect(() => {
        fetchRestaurantMenuData();
    }, []);

    const fetchRestaurantMenuData = async () => {
        const menu = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.868723&lng=77.653677&restaurantId=268782&catalog_qa=undefined&submitAction=ENTER");
        const menuJson = await menu.json();
        setRestaurantMenuData(menuJson.data);
    }

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
                <Accordion defaultActiveKey="Leon Gourmet ( Burgers and Sides )" flush>
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