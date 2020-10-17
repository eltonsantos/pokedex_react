import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, Wrapper} from './styles';

const PokemonDetails = ({location}) => {

  const TYPE_COLORS = {
    bug: 'B1C12E',
    dark: '4F3A2D',
    dragon: '755EDF',
    electric: 'FCBC17',
    fairy: 'F4B1F4',
    fighting: '823551D',
    fire: 'E73B0C',
    flying: 'A3B3F7',
    ghost: '6060B2',
    grass: '74C236',
    ground: 'D3B357',
    ice: 'A3E7FD',
    normal: 'C8C4BC',
    poison: '934594',
    psychic: 'ED4882',
    rock: 'B9A156',
    steel: 'B5B5C3',
    water: '3295F6'
  };

  const STATS = {
    'hp': 'HP',
    'attack': 'Ataque',
    'defense': 'Defesa',
    'special-attack': 'Especial Ataque',
    'special-defense': 'Especial Defesa',
    'speed': 'Velocidade'
  };

  const [pokemon, setPokemon] = useState({});

  const getPokemon = async (url) => {
    try {
      const { data } = await axios.get(url);
      setPokemon(data)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const url = location.search.substr(1);
    getPokemon(url);
    // eslint-disable-next-line
  }, [location.search])

  // Conversao
  const height =
      Math.round(pokemon.height ) / 10;

  const weight =
      Math.round(pokemon.weight) / 10;

  return (
    <Container>
      <Wrapper>
        <div className="col">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-5">
                  <h5>Nº { pokemon.id }</h5>
                </div>
                <div className="col-7">
                  <div className="float-right">

                    {pokemon.id &&
                      pokemon.types.map(({ type: { name } }) => (
                      <span key={name} className="badge badge-pill mr-1"
                        style={{
                          backgroundColor: "#" + TYPE_COLORS[name],
                          color: 'white'
                        }}>{name}</span>)
                    )}
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-3">
                  { pokemon.id && (
                   <img src={ pokemon.sprites.front_default } className="card-img-top rounded mx-auto mtt-2" alt={ pokemon.name } />
                  )}
                </div>
                <div className="col-9">
                  <h4 className="mx-auto">{ pokemon.name }</h4>

                  
                  { pokemon.id && pokemon.stats.map(({ base_stat: value, stat: { name, color } }) => (
                    <div key={ pokemon.id } className="row align-items-center">
                      <div className="col-12 col-md-3">{ STATS[name] }</div>
                      <div className="col-12 col-md-9">
                        <div className="progress">
                          <div
                              className="progress-bar"
                              role="progressbar"
                              style={{
                                width: `${(( value / 150 ) * 100)}%`,
                                backgroundColor: "#" + TYPE_COLORS[STATS[name].color || 'fire' ]
                              }}
                              aria-valuenow="25"
                              aria-valuemin="0"
                              aria-valuemax="100"
                          >
                            <small> {  value } </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>

            </div>

            <hr />

            <div className="card-body">
              <h5 className="card-title text-center">Profile</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-6">
                      <h6 className="float-right">Altura (m):</h6>
                    </div>
                    <div className="col-6">
                      <h6 className="float-left">{ height }</h6>
                    </div>
                    <div className="col-6">
                      <h6 className="float-right">Peso (kg):</h6>
                    </div>
                    <div className="col-6">
                      <h6 className="float-left">{ weight }</h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-6">
                      <h6 className="float-right">Abilities:</h6>
                    </div>
                    
                    { pokemon.id && (
                      <div className="col-6">
                        <h6 className="float-left">
                          { pokemon.abilities.map(
                            (item) => item.ability.name
                          ).join(', ').toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1))
                          }
                        </h6>
                      </div>
                    )}
                    
                  </div>
                </div>           
              </div>
            </div>

            <hr />

            <div className="card-body">
              <h5 className="card-title text-center">List Moves</h5>
              <div className="row">
    
                { pokemon.id && (
                  <div className="col-12 text-center">
                    <h6 className="float-left moves">
                      { pokemon.moves.map(
                        (item) => item.move.name
                      ).join(', ').toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1))
                      }
                    </h6>
                  </div>
                )}

              </div>
            </div>

            <div className="card-footer text-muted">
              Dados consumidos da <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokeAPI.co</a>
            </div>

          </div>

        </div>
      </Wrapper>
    </Container>
  );
}

export default PokemonDetails;
