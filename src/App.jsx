import './App.css';
import React, {useState, useEffect} from 'react';
import Beers from './containers/Beers/Beers';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const [beers, setBeers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [abvChecked, setAbvAsChecked] = useState(false);
  const [acidicChecked, setAcidicAsChecked] = useState(false);

  const getBeerArray = () => {
    let url = 'https://api.punkapi.com/v2/beers'

    if (searchText.length > 0 || abvChecked) {
      url += '?'
    } if (searchText.length > 0) {
      url += `beer_name=${searchText}&`
    }  if (abvChecked) {
      url += 'abv_gt=6&'
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
  }, [searchText, abvChecked, acidicChecked])

  return (
    <div className="App">
      <h1>Beers</h1>
      <SearchBar searchFunction={setSearchText} abvState={abvChecked} abvFunction={setAbvAsChecked} acidicState={acidicChecked} acidicFunction={setAcidicAsChecked}/>
      <Beers beers={beers}/>
    </div>
  );
}

export default App;
