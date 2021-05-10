import React from "react";
import BeerCard from '../../components/BeerCard';
import BeerPopup from '../../components/BeerPopup';
import styles from "./Beers.module.scss";

const Beers = (props) => {
  const { beers, setClickedId } = props;
  const beersJSX = beers.map(beer => <BeerCard beer={beer} setClickedId={setClickedId} />)
  
  return (
    <div className={styles.beerContainer}>
      {beersJSX}
    </div>
  );
};

export default Beers;
