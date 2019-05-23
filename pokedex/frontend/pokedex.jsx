import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as PokemonAPIUtil from './util/api_util';
import { receiveAllPokemon, fetchAllPokemon, requestAllPokemon } from "./actions/pokemon_actions";
import selectAllPokemon from './reducers/selectors';
import Root from './components/Root';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    const rootEl = document.getElementById('root');
    
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.PokemonAPIUtil = {};
    // window.PokemonAPIUtil.fetchAllPokemon = PokemonAPIUtil.fetchAllPokemon;
    window.fetchAllPokemon = PokemonAPIUtil.fetchAllPokemon;
    window.receiveAllPokemon = receiveAllPokemon;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;
    

    ReactDOM.render(<Root store={store}/>, rootEl);
});