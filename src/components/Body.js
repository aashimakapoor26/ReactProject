import React, { useEffect } from "react";
import RestaurantCard from './RestaurantCard';
import RestListUrl from '../utils/mockData';
import ShimmerUI from '../components/Shimmer';
import { useState, useEffect } from "react";

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
        const restaurants = responseJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
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

    // Conditional rendering
    let bodyContent = restaurantList?.length === 0
    ? <ShimmerUI />
    : (
        <div className='body'>
            <div className="filter">
                <div className="search-container">
                    <input
                        type="search"
                        className="search-box"
                        placeholder="Search..."
                        name="search"
                        value={searchText}
                        onChange={onSearchChange}
                    ></input>
                    <button className="button" onClick={onSearchClick}>Search</button>
                </div>
                <button 
                    className="button"
                    onClick={() => onFilterBtnClick()}
                >Top Rated Restaurants</button>
            </div>
            <div className='restaurant-container'>
                {filteredList?.map(restaurant => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        restList={restaurant}
                    />
                ))}
            </div>
        </div>
    );

    return bodyContent;
}

export default Body;