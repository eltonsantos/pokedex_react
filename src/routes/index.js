import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Pokemons from '../pages/Pokemons';
import PokemonDetails from '../pages/PokemonDetails';
import About from '../pages/About';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Pokemons } />
            <Route path="/pokemon/" component={ PokemonDetails } />
            <Route path="/about/" component={ About } />
        </Switch>
    </BrowserRouter>
);

export default Routes;