import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import booksReducer from './reducer/booksReducer'
import BasicReducer from './reducer/BasicReducer';



const rootReducer = combineReducers({
    booksReducer,
    BasicReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))