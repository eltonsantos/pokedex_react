import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonDetails = ({location}) => {

  const [pokemon, setPokemon] = useState({});

  const getPokemon = async (url) => {
    try {
      const { data } = await axios.get(url);
      setPokemon(data)
      console.log("pokemon: "+pokemon);
      console.log("data: "+data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const url = location.search.substr(1);
    getPokemon(url);
    console.log(url);
  }, [location.search])

  return (
    <>
      <h1>Pokemon Detail</h1>
      <h3>{ pokemon.name}</h3>
      <ul>
        <li>{ pokemon.id }</li>
        <li>Stats</li>
        <li>Sprite</li>
        <li>Abilities</li>
        <li>Movies</li>
      </ul>
    </>
  );
}

export default PokemonDetails;
