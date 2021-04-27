import React from "react";
import BeerCard from '../../components/BeerCard';
import styles from "./Beers.module.scss";

const Beers = (props) => {
  const { beers } = props;
  
  const beersJSX = beers.map(beer => <BeerCard beer={beer}/>)

  return (
    <div className={styles.beerContainer}>
      {beersJSX}
    </div>
  );
};

export default Beers;
