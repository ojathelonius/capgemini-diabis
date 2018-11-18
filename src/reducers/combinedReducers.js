import { combineReducers } from 'redux';
import appReducer from './appReducer';
import chatReducer from './chatReducer';

const combinedReducers = combineReducers({
    appReducer,
    chatReducer
});

export default combinedReducers;