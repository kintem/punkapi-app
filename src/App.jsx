import './App.css';
import React, {useState, useEffect} from 'react';
import Beers from './containers/Beers/Beers';
import BeerPopup from './components/BeerPopup';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [abvChecked, setAbvAsChecked] = useState(false);
  const [acidicChecked, setAcidicAsChecked] = useState(false);
  const [classicsRange, setClassicsRange] = useState(false);
  const [clickedId, setClickedId] = useState('');

  const getBeerArray = () => {
    let url = 'https://api.punkapi.com/v2/beers?per_page=30&'

    // if (searchText.length > 0 || abvChecked || classicsRange) {
    //   url += '?';
    // } 
    if (searchText.length > 0) {
      url += `beer_name=${searchText}&`
    }  if (abvChecked) {
      url += 'abv_gt=6&';
    } if (classicsRange) {
      url += 'brewed_before=12-2010';
    }

    fetch(url)
    .then(response => response.json())
    .then(jsonResponse => {
      if (acidicChecked) {
        const phBeers = jsonResponse.filter(beer => beer.ph < 4);
        setBeers(phBeers);
      } else {
        setBeers(jsonResponse)
      }
    })
  }

  useEffect(()=>{
    getBeerArray();
  }, [searchText, abvChecked, acidicChecked, classicsRange])


  return (
    <div className="App">
      {clickedId ? 
        <div className="popupContainer">
          <BeerPopup clickedId={clickedId} beers={beers} />
        </div>
          : null }
      <div className="header">
        <h1>BrewDog Beers</h1>
        <SearchBar searchFunction={setSearchText} abvState={abvChecked} abvFunction={setAbvAsChecked} acidicState={acidicChecked} acidicFunction={setAcidicAsChecked} classicsRange={classicsRange} classicsFunction={setClassicsRange} />
      </div>
      <Beers beers={beers} setClickedId={setClickedId} />
      <p>Made using data provided by Punk API</p>
    </div>
  );
}

export default App;
