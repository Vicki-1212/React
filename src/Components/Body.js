import RestaurantContainer from "./RestaurantContainer";
import { data } from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {

    const [listOfRes, setListOfRes] = useState([]);

    const [searchValue, setSearchValue] = useState("");

    const handleSearch = () => {
        const filteredList = listOfRes.filter((res) => res.name.toLowerCase().includes(searchValue.toLowerCase()));
        if (filteredList.length > 0) {
            setListOfRes(filteredList);
        } else {
            setListOfRes(data);
        }
    }

    const fetchData = async () => {
        const data = await fetch('https://proxy.corsfix.com/?https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9939595&lng=80.1706653&carousel=true&third_party_vendor=1');
        
        const jsonData = await data.json();
        const restaurants = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        if (restaurants) {
            setListOfRes(restaurants);
        }
        else {
            setListOfRes([])
        }
        
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="body-container">
            <div className="search-container">
                <input type="search" className="input-search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <button className="search-button" onClick={handleSearch}>Search</button>
                <button className="filter-button" onClick={() => {
                    const filteredList = listOfRes.filter((res) => res.avgRating > 4);
                    setListOfRes(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRes?.map((item) => (
                    <RestaurantContainer
                        key={item?.info?.id}
                        resName={item?.info?.name}
                        cuisine={item?.info?.cuisines?.join(",")}
                        image={item?.info?.cloudinaryImageId}
                        rating={item?.info?.avgRating}
                        deliveryTime={item?.info?.sla?.deliveryTime}
                        costForTwo={item?.info?.costForTwo}
                    />
                ))}
            </div>
        </div>
    )
}

export default Body;