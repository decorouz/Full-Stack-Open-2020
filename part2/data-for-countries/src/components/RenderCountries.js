import React from 'react';
import Country from './Country';

const RenderCountries = ({ countries, searchQuery, showCountry }) => {
  const renderCountries = () => {
    const countryToShow = countries.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const country = countryToShow[0];

    if (!searchQuery) {
      return;
    }

    if (countryToShow.length === 1) {
      return <Country country={country} />;
    }

    if (countryToShow.length <= 10) {
      return countryToShow.map(filter => (
        <div key={filter.alpha3Code}>
          {filter.name}{' '}
          <button onClick={() => showCountry(filter.name)}>show</button>{' '}
        </div>
      ));
    }

    if (countryToShow.length > 10)
      return <p>Too many matches, specify another filter</p>;
  };

  return <div>{renderCountries()}</div>;
};
export default RenderCountries;
