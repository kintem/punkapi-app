import React from "react";
import styles from "./BeerCard.module.scss";

const BeerCard = (props) => {
  const { beer } = props;

  return (
    <div className={styles.beerCard}>
      <img src={beer.image_url} alt={beer.name}/>
      <div>
      <h3>{beer.name}</h3>
      <div>
        <p>ABV: {beer.abv}</p>
        <p>PH: {beer.ph}</p>
      </div>
      </div>
    </div>
  );
};

export default BeerCard;
