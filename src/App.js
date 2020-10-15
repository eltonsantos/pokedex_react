import React from 'react';
import Routes from './routes'

const App = () => {
/*
  const [pokemon, setPokemon] = useState();

  const getPokemon = async () => {

  }
  
  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  }
*/
  return (
    <div className="App">
      {/* <form onSubmit={ handleSubmit }>
        <input type="text" onChange={ handleChange } placeholder="Enter Pokemon Name" />
      </form> */}
      <Routes />
    </div>
  );
}

export default App;
