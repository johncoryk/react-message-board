import React, { useState } from 'react';

const SearchGames = () => {
  const [game, setGame] = useState('');
  const [searchItem, setSearchItem] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setSearchItem(value);
  };

  const getGameInfo = e => {
    e.preventDefault();
    fetch(`https://api.rawg.io/api/games?page_size=5&search=${searchItem}%20v`)
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <div className='search-container'>
      <form onSubmit={e => getGameInfo(e)}>
        <input type='text' value={searchItem} onChange={handleChange} />
        <input className='btn-style' type='submit' value='Search' />
      </form>
    </div>
  );
};

export default SearchGames;
