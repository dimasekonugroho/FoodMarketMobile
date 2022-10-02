import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';

const reducer = combineReducers({registerReducer, globalReducer});

export default reducer;
