import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Pokemons from '../pages/Pokemons';
import PokemonDetails from '../pages/PokemonDetails';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ Pokemons } />
            <Route path="/pokemon/detalhes" component={ PokemonDetails } />
        </Switch>
    </BrowserRouter>
);

export default Routes;