import RestaurantContainer from "./RestaurantContainer";
import { data } from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRes, setListOfRes] = useState(data);

    return (
        <div className="body-container">
            <div className="search-container">
                <input type="search" className="input-search" />
                <button className="search-button">Search</button>
                <button className="filter-button" onClick={() => {
                    const filteredList = listOfRes.filter((res) => res.avgRating > 4);
                    setListOfRes(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRes.map((item) => (
                    <RestaurantContainer
                        key={item.id}
                        resName={item.name}
                        cuisine={item.cuisines.join(", ")}
                        image={item.image}
                        rating={item.avgRating}
                        deliveryTime={item.deliveryTime}
                    />
                ))}
            </div>
        </div>
    )
}

export default Body;