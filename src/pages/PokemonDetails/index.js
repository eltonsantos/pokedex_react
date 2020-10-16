import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Wrapper } from "./styles";

const PokemonDetails = ({ location }) => {
  const [pokemon, setPokemon] = useState({});
  console.log(pokemon);
  const getPokemon = async (url) => {
    try {
      const { data } = await axios.get(url);
      setPokemon(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const url = location.search.substr(1);
    getPokemon(url);
  }, []);

  return (
    <Container>
      <Wrapper>
        <div className="col">
          <div className="card">
            <div className="card-header">
              <div className="row">
                <div className="col-5">
                  <h5>{pokemon.id}</h5>
                </div>
                <div className="col-7">
                  <div className="float-right">
                    <span className="badge badge-pill mr-1">Type 1</span>
                    <span className="badge badge-pill mr-1">Type 2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-3">
                  {pokemon.id && (
                    <img
                      src={pokemon.sprites.back_default}
                      className="card-img-top rounded mx-auto mtt-2"
                    />
                  )}
                </div>
                <div className="col-9">
                  <h4 className="mx-auto">{pokemon.name}</h4>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3">HP</div>
                    <div className="col-12 col-md-9">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <small>100</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3">Attack</div>
                    <div className="col-12 col-md-9">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <small>100</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3">Defense</div>
                    <div className="col-12 col-md-9">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <small>100</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3">Speed</div>
                    <div className="col-12 col-md-9">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <small>100</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3">Sp. Atk.</div>
                    <div className="col-12 col-md-9">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <small>100</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-3">Sp. Def.</div>
                    <div className="col-12 col-md-9">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <small>100</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="card-body">
              <h5 className="card-title text-center">Profile</h5>
              <div className="row">
                <div className="col-md-6"></div>
                <div className="col-md-6">
                  <div className="row">
                    <div className="col-6">
                      <h6 className="float-right">Abilities:</h6>
                    </div>
                    {pokemon.id && (
                      <div className="col-6">
                        <h6 className="float-left">
                          {pokemon.abilities.map(
                            (item) => `${item.ability.name}, `
                          )}
                        </h6>
                      </div>
                    )}

                    <div className="col-6">
                      <h6 className="float-right">Types:</h6>
                    </div>
                    {pokemon.id && (
                      <div className="col-6">
                        <h6 className="float-left">
                          {pokemon.types.map((item) => `${item.type.name}, `)}
                        </h6>
                      </div>
                    )}

                    <div className="col-6">
                      <h6 className="float-right">EVs:</h6>
                    </div>
                    <div className="col-6">
                      <h6 className="float-left">EVs aqui</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer text-muted">
              Dados consumidos da{" "}
              <a href="https://pokeapi.co/" target="_blank">
                PokeAPI.co
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default PokemonDetails;
