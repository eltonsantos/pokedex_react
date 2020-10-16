import React, { Component, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {Container, Wrapper} from './styles';
import axios from 'axios';

const Pokemon = () => {

  const [previous, setPrevious] = useState([]);
  const [next, setNext] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const history = useHistory();

  console.log(pokemons)

  const getPokemons = async (url='https://pokeapi.co/api/v2/pokemon') => {
    try {
      const { data } = await axios.get(url);

      // console.log(data);
      setPrevious(data.previous);
      setNext(data.next);
      setPokemons(data.results);

    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    getPokemons();
  }, []);


  return (
    <Container>
      <Wrapper>
        <div className="row">
            { pokemons.map( pokemon => (
              <div className="col-md-3 col-sm-6 mb-5">
                <a href="#">
                  <h5 className="card-header">id</h5>
                  <div key={ pokemon.name } className="card" onClick={() => {
                    history.push({
                      pathname: '/pokemon/',
                      search: `${ pokemon.url }`
                    });
                  }}>
                    <div className="card-body">
                      <h6>{ pokemon.name }</h6>
                    </div>
                  </div>
                </a>
              </div>
            ))}

            <ul class="pagination">
              <button class="page-link"
                      disabled={ !previous }
                      onClick={() => {
                          getPokemons(previous);
                      }}>
                        Previous
              </button>

              <button class="page-link"
                      disabled={ !next }
                      onClick={() => {
                          getPokemons(next);
                      }}>
                        Next
              </button>
            </ul>

        </div> 
      </Wrapper>
    </Container>
  );
}

export default Pokemon;