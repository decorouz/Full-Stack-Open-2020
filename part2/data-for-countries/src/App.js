import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RenderCountries from './components/RenderCountries';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(response => {
      setCountries(response.data);
    });
  }, []);

  const handleSearchQuery = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      find countries <input value={searchQuery} onChange={handleSearchQuery} />
      <RenderCountries countries={countries} searchQuery={searchQuery} />
    </div>
  );
};

export default App;
