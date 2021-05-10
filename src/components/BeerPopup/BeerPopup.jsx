import React from 'react';
import styles from './BeerPopup.module.scss';

const BeerPopup = ({beers, clickedId}) => {
  const clickedBeer = beers.find(beer => beer.id === clickedId);

  return (
    <div className={styles.beerPopup}>
      <img src={clickedBeer.image_url} alt={clickedBeer.name}/>
      <div className={styles.text}>
        <h3>{clickedBeer.name}</h3>
        <p>{clickedBeer.tagline}</p>
        <p>{clickedBeer.description}</p>
        <p>APV: {clickedBeer.abv}</p>
        <p>PH: {clickedBeer.ph}</p>
        <p>First Brewed: {clickedBeer.first_brewed}</p>
      </div>
    </div>
  )
}

export default BeerPopup;