import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const { searchFunction, abvState, abvFunction, acidicState, acidicFunction, classicsRange, classicsFunction } = props;

  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search here" onChange={(event) => searchFunction(event.target.value)}/>
      <div className={styles.filterContainer}>
        <label htmlFor="highAbv">High ABV (abv &gt; 6.0%)</label>
        <input type="checkbox" name="highAbv" id="highAbv" onChange={()=>abvFunction(!abvState)}/>
        <label htmlFor="acidic">Acidic (ph &lt; 4)</label>
        <input type="checkbox" name="acidic" id="acidic" onChange={()=>acidicFunction(!acidicState)}/>
        <label htmlFor="classicRange">Classic Range</label>
        <input type="checkbox" name="classicRange" id="classicRange" onChange={()=>classicsFunction(!classicsRange)} />
      </div>
    </div>
  );
};

export default SearchBar;
