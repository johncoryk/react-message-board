import React, { useState } from 'react';

import Button from './utility/Button';
import SubHeading from './utility/SubHeading';
import GameHeading from './utility/GameHeading';
import LargeHeading from './utility/LargeHeading';

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
        setSearchItem('');
      });
  };

  return (
    <div className='search-container'>
      <form onSubmit={e => getGameInfo(e)}>
        <input
          className='search-input'
          type='text'
          value={searchItem}
          onChange={handleChange}
        />
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
          <div className='horizontal-rule'></div>
          <ul className='platforms'>
            {game.parent_platforms.map(platform => (
              <li key={platform.platform.id}>
                <GameHeading text={platform.platform.name} />
              </li>
            ))}
          </ul>
          <h3>Released: {game.released}</h3>
          <h3>
            <em>Rating: {game.rating}</em>
          </h3>
          <ul className='genres'>
            <p>
              <b>Genre(s):</b>
            </p>
            {game.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </article>
      ) : (
        <div className='not-rendered'>
          <LargeHeading text='Search for a game!' />
        </div>
      )}
      <article className='game-info'></article>
    </div>
  );
};

export default SearchGames;
