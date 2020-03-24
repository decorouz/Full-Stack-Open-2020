import React from 'react';

const Country = ({ country }) => {
  const mapLanguages = lang => {
    return lang.map(l => <li key={l.iso639_1}>{l.name}</li>);
  };
  return (
    <div>
      <h2>{country.name}</h2>
      <div>
        capital: {country.capital} <br />
        population: {country.population}
      </div>

      <h3>languages</h3>
      <ul>{mapLanguages(country.languages)}</ul>
      <img style={{ width: '200px' }} src={country.flag} alt="" />
    </div>
  );
};

export default Country;
