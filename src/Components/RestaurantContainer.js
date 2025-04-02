import { IMG_URL } from "../utils/constant";

const RestaurantContainer = (props) => {
    return (
      <div className="res-card">
        <img
          className="res-image"
          src={IMG_URL + props.image}
          alt="res-image"
        />
        <h2>{props.resName}</h2>
        <h4>{props.cuisine}</h4>
        <h4>{props.rating} stars</h4>
        <h4>{props.deliveryTime} minutes</h4>
        <h4>{props.costForTwo}</h4>
      </div>
    );
};

export default RestaurantContainer;