/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import '../styles/Main.css';
import imgs from './images';
import pokemonList from './pokemonList';

function Main() {
  const [randomArray, setRandomArray] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  ]);

  const [pokemonChecker, setPokemonChecker] = useState(pokemonList);
  const [bestScore, setBestScore] = useState(0);
  const [count, setCount] = useState(0);

  const shuffleArray = () => {
    let shuffledArry = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    shuffledArry = shuffledArry.sort(() => Math.random() - 0.5);
    setRandomArray(shuffledArry);
  };

  const checkPokemon = (e) => {
    const name = e.target.id;

    if (pokemonChecker[name] === 'clicked') {
      // Fully reset game
      setCount(0);
      setPokemonChecker(pokemonList);
      if (count > bestScore) {
        setBestScore(count);
      }
    } else {
      // Mark the Pokemon as clicked
      setPokemonChecker({
        ...pokemonChecker,
        [e.target.id]: 'clicked',
      });
      setCount(count + 1);

      // Highest score possible
      if (count === 11) {
        setBestScore(count + 1);

        // Fully reset game
        setCount(0);
        setPokemonChecker(pokemonList);
      }
    }
  };

  const handleOnClick = (e) => {
    shuffleArray();
    checkPokemon(e);
  };

  return (
    <div className="mainBody">
      {randomArray.map((i) => (
        <img
          key={Math.random()}
          id={`pokemon${randomArray[i]}`}
          onClick={handleOnClick}
          className="pokemon"
          src={imgs[randomArray[i]]}
          alt="charizard"
        />
      ))}
      <div className="subTitleDiv">
        <p id="topScore" className="subTitleFont">
          Top Score: {bestScore}
        </p>
        <p id="score" className="subTitleFont">
          Count: {count}
        </p>
      </div>
    </div>
  );
}

export default Main;
