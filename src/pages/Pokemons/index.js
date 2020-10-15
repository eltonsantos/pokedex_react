import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Pokemon = () => {

  const [pokemons, setPokemons] = useState([]);
  const [previous, setPrevious] = useState([]);
  const [next, setNext] = useState([]);
  const history = useHistory();

  // console.log(pokemons)

  const getPokemons = async (url='https://pokeapi.co/api/v2/pokemon') => {
    try {
      const { data } = await axios.get(url);

      // console.log(data);
      setPokemons(data.results);
      setPrevious(data.previous);
      setNext(data.next);

    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <h1>Pokemon</h1>
      <div className="pokemonList">
        { pokemons.map( pokemon => (
          <button key={ pokemon.name } onClick={() => {
            history.push({
              pathname: '/pokemon/',
              search: `${ pokemon.url }`
            });
          }}>
            { pokemon.name }
          </button>
        ))}

        <button disabled={ !previous } onClick={() => {
          getPokemons(previous);
        }} >Previous</button>

        <button disabled={ !next } onClick={() => {
          getPokemons(next);
        }} >Next</button>

      </div>
    </>
  );
}

export default Pokemon;