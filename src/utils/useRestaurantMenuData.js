import { useEffect, useState } from "react";

const useRestaurantMenuData = (resId) => {
    const [restaurantMenuData, setRestaurantMenuData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const menu = await fetch(`https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.868723&lng=77.653677&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const menuJson = await menu.json();
        setRestaurantMenuData(menuJson.data);
    }

    return restaurantMenuData;
}

export default useRestaurantMenuData;