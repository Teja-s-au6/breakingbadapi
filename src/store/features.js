import { combineReducers } from 'redux';
import charactersReducer from "./characterReducer";
import currentCharacterReducer from './currentCharacter';


export default combineReducers({
    characters: charactersReducer,
    currentCharacter: currentCharacterReducer
})