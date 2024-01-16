import React from 'react';
import Card from './Card';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const {
        itemCards
    } = data;

    const onToggleClick = () => {
        setShowIndex();
    }

    return (
        <div className="mb-4 p-4 shadow border-b-8 border-rose-400">
            <div onClick={onToggleClick} className="cursor-pointer">{`${data.title} (${itemCards.length})`}</div>
            {showItems && <Card items={itemCards} />}
        </div>
    );
}

export default RestaurantCategory;
