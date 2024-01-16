import React, { useEffect, useState } from "react";
import RestaurantCard, {withBestSellerLabel} from './RestaurantCard';
import RestListUrl from '../utils/mockData';
import ShimmerUI from '../components/Shimmer';
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(RestListUrl);
        const responseJson = await response.json();
        const restaurants = responseJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantList(restaurants);
        setFilteredList(restaurants);
    };

    const onFilterBtnClick = () => {
        const filteredList = restaurantList.filter(restaurant => restaurant.info.avgRating > 4.3);
        setFilteredList(filteredList);
    }

    const onSearchChange = (e) => {
        setSearchText(e.target.value);
    }

    const onSearchClick = () => {
        const filteredList = restaurantList?.filter(restaurant => {
            return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
        });
        setFilteredList(filteredList);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) {
        return <h4>Looks like you are offline, please check your internet</h4>
    }

    const RestaurantCardBestSeller = withBestSellerLabel(RestaurantCard);

    // Conditional rendering
    let bodyContent = restaurantList?.length === 0
    ? <ShimmerUI />
    : (
        <div className='w-3/4 m-auto'>
            <div className="flex justify-center my-4">
                <div className="search-container">
                    <input
                        type="search"
                        className="px-3 py-2 w-96 rounded border-none mr-2 shadow"
                        placeholder="Search for restaurants and food"
                        name="search"
                        value={searchText}
                        onChange={onSearchChange}
                    ></input>
                    <button className="px-4 py-2.5 border-none rounded text-white text-sm font-medium bg-rose-500 hover:bg-rose-600 cursor-pointer duration-500" onClick={onSearchClick}>Search</button>
                </div>
                {/* <button 
                    className="button"
                    onClick={() => onFilterBtnClick()}
                >Top Rated Restaurants</button> */}
            </div>
            <div className='restaurant-container flex flex-wrap justify-center'>
                {filteredList?.map(restaurant => (
                    <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id} className="no-underline text-gray-500 relative">
                        { restaurant.info.avgRating >= 4.5
                        ? (<RestaurantCardBestSeller
                            restList={restaurant}
                        />)
                        : (<RestaurantCard
                            restList={restaurant}
                        />)
                        }
                    </Link>
                ))}
            </div>
        </div>
    );

    return bodyContent;
}

export default Body;