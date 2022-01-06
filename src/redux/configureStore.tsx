import {createStore, combineReducers} from 'redux'
import { ratingReducer } from './ducks/stars';


const reducers = combineReducers({
    rating: ratingReducer
})
const store = createStore(reducers);

export default store