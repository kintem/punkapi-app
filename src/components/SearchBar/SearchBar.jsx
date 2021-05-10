import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const { searchFunction, abvState, abvFunction, acidicState, acidicFunction, classicsRange, classicsFunction } = props;

  return (
    <section className={styles.searchBar}>
      <input className={styles.searchInput} type="text" placeholder="Search here" onChange={(event) => searchFunction(event.target.value)}/>
      <section className={styles.filterContainer}>
        <div>
          <input type="checkbox" name="highAbv" id="highAbv" onChange={()=>abvFunction(!abvState)}/>
          <label htmlFor="highAbv">High ABV (abv &gt; 6.0%)</label>
        </div>
        <div>
          <input type="checkbox" name="acidic" id="acidic" onChange={()=>acidicFunction(!acidicState)}/>
          <label htmlFor="acidic">Acidic (ph &lt; 4)</label>
        </div>
        <div>
          <input type="checkbox" name="classicRange" id="classicRange" onChange={()=>classicsFunction(!classicsRange)} />
          <label htmlFor="classicRange">Classic Range</label>
        </div>
      </section>
    </section>
  );
};

export default SearchBar;
