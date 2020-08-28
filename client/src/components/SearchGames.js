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
      .then(data => {
        setGame(data.results[0]);
        console.log(data.results[0]);
      });
  };

  return (
    <div className='search-container'>
      <form onSubmit={e => getGameInfo(e)}>
        <input type='text' value={searchItem} onChange={handleChange} />
        <input className='btn-style' type='submit' value='Search' />
      </form>
      {game ? (
        <article className='game-info'>
          <h2>{game.name}</h2>
          <h3>Released: {game.released}</h3>
          <h3>Rating: {game.rating}</h3>
          {game.genres.map(genre => (
            <span>{genre.name} </span>
          ))}
        </article>
      ) : (
        'Search for a game!'
      )}
      <article className='game-info'></article>
    </div>
  );
};

export default SearchGames;
