import React from 'react';
import './CountryCard.scss';

const CountryCard = ({ countryName, flagUrl, population, capital }) => {

  return (

    <div className="country-card">

      <h2>{countryName}</h2>
      <img src={flagUrl} alt={countryName} />
      <p><strong>Popolazione:</strong> {population}</p>
      <p><strong>Capitale:</strong> {capital}</p>

    </div>

  );

};

export default CountryCard;
