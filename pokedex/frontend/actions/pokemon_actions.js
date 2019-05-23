import * as PokemonAPIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const receiveAllPokemon = pokemon => {
    debugger
    return {
        type: RECEIVE_ALL_POKEMON,
            pokemon
    };
};

export const fetchAllPokemon = () => {
    return (dispatch) => {
        return PokemonAPIUtil.fetchAllPokemon().then(payload => {
            return dispatch(receiveAllPokemon(payload));
        });
    };
};

export const requestAllPokemon = () => (dispatch) => (
    PokemonAPIUtil.fetchAllPokemon()
        .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);
