import React, { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar/SearchBar'
import CountryCard from './Components/CountryCard/CountryCard'
import './App.scss';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(obj => { setCountries(obj) })
  }, []);

  const onSearch = () => {
    fetch('https://restcountries.com/v3.1/name/${searchValue}')
      .then(response => response.json())
      .then(obj => { setCountries(obj) })
  }

  return (

    <div className='app-container'>

      <SearchBar
        value={searchValue}
        onChange={(e) => { setSearchValue(e.target.value) }}
        onSearch={onSearch}
      />

      {countries.map((country, i) => (
        <CountryCard
          key={i}
          countryName={country.name.official}
          flagUrl={country.flags.svg}
          population={country.population}
          capital={country.capital}
        />
      ))}

    </div>

  );
};

export default App;
