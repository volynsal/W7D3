import selectAllPokemon from '../../reducers/selectors';
import { connect } from 'react-redux';
import PokemonIndex from './pokemon/pokemon_index';

const msp = state => ({

});

const mdp = state => ({

});

export default connect(msp, mdp)(PokemonIndex);