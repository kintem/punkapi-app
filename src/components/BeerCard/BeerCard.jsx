import React from "react";
import styles from "./BeerCard.module.scss";

const BeerCard = (props) => {
  const { beer, setClickedId } = props;

  return (
    <div className={styles.beerCard} onClick={() => {
      console.log('i got clicked');
      setClickedId(beer.id)
      }}>
      <h4>{beer.name}</h4>
      <div className={styles.beerDetails}>
      <img src={beer.image_url} alt={beer.name}/>
      <div>
        <p>ABV: {beer.abv}</p>
        <p>PH: {beer.ph}</p>
      </div>
      </div>
    </div>
  );
};

export default BeerCard;
