import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Pokemon() {

  const [pokemons, setPokemons] = useState([]);
  const [previous, setPrevious] = useState([]);
  const [next, setNext] = useState([]);

  console.log(pokemons)
  console.log(previous)

  const getPokemons = async () => {
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');

      console.log(data);
      setPokemons(data.results);
      setPrevious(data.previous);
      setNext(data.next);

    }catch(err){
      console.log(err);
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
          <button>{ pokemon.name }</button>
        ))}
      </div>
    </>
  );
}

export default Pokemon;