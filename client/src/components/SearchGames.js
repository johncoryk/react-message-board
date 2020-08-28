import React, { useState } from 'react';

import Button from './utility/Button';
import SubHeading from './utility/SubHeading';
import GameHeading from './utility/GameHeading';

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
        <Button text='Search' color='default' />
      </form>
      {game ? (
        <article className='game-info'>
          <img
            className='game-image'
            src={game.background_image}
            alt={game.name}
          />
          <SubHeading text={game.name} />
          <GameHeading text={game.parent_platforms[0].platform.name} />
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
