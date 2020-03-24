import React from 'react';

const Country = ({ country }) => {
  const language = country.languages.map(lang => (
    <li key={lang.iso639_1}>{lang.name}</li>
  ));

  return (
    <div>
      <h2>{country.name}</h2>
      <div>
        capital: {country.capital} <br />
        population: {country.population}
      </div>

      <h3>languages</h3>
      <ul>{language}</ul>
      <img style={{ width: '200px' }} src={country.flag} alt="" />
    </div>
  );
};

export default Country;
