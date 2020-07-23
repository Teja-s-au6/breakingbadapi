import { combineReducers } from 'redux';
import featuresReducers from './features';


export default combineReducers({
    features : featuresReducers
})