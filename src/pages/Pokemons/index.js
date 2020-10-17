import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {Container, Wrapper} from './styles';
import axios from 'axios';

const Pokemon = () => {

  const [previous, setPrevious] = useState([]);
  const [next, setNext] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const history = useHistory();

  const [search, setSearch] = useState([]);

  const getPokemons = async (url='https://pokeapi.co/api/v2/pokemon') => {
    try {
      const { data } = await axios.get(url);

      // console.log(data);
      setPrevious(data.previous);
      setNext(data.next);
      setPokemons(data.results.map(({ url, name }) => ({
        url,
        name,
        id: url.match(/(\d+)\/$/)[1],
      })));

    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    getPokemons();
  }, []);


  const handleSearch = useCallback(async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      if (!!data) {
        history.push({
          pathname: '/pokemon/',
          search: `https://pokeapi.co/api/v2/pokemon/${data.id}`
        });
      }
    }
    catch (e) {
      console.log(e);
      alert('Pokemon não encontrado!')
    }
  }, [history, search]);





  return (
    <Container>



        <form onSubmit={handleSearch} className="busca form-inline">
          <input type="text" class="form-control" value={search} onChange={(e) => { setSearch(e.target.value) }} />
          <button type="button" onClick={handleSearch} className="btn btn-primary btn-red">Pesquisar</button>
        </form>

      <Wrapper>
        
        <div className="row">

            { pokemons.map( pokemon => (
              
              <div key={ pokemon.name } className="col-md-3 col-sm-6 mb-5 card-block">
                {/* eslint-disable-next-line */}
                <a href="#" >
                  <h5 className="card-header">{ pokemon.id }</h5>
                  <div key={ pokemon.name } className="card" onClick={() => {
                    history.push({
                      pathname: '/pokemon/',
                      search: `${ pokemon.url }`
                    });
                  }}>
                    
                      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} className="card-img-top rounded mx-auto mt-2" alt={ pokemon.name } />
                    
                    <div className="card-body">
                      <h6>{ pokemon.name }</h6>
                    </div>
                  </div>
                </a>
              </div>
            ))}

            <ul className="pagination">
              <button className="page-link"
                      disabled={ !previous }
                      onClick={() => {
                          getPokemons(previous);
                      }}>
                        Previous
              </button>

              <button className="page-link"
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