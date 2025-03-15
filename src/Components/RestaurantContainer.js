const RestaurantContainer = (props) => {
    return (
      <div className="res-card">
        <img
          className="res-image"
          src={props.image}
          alt="res-image"
        />
        <h2>{props.resName}</h2>
        <h4>{props.cuisine}</h4>
        <h4>{props.rating} stars</h4>
        <h4>{props.deliveryTime} minutes</h4>
        <h4>Rs.500 for two</h4>
      </div>
    );
};

export default RestaurantContainer;