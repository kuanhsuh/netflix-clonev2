import { combineReducers } from 'redux';
import UpcomingReducer from './reducer_upcoming';
import SearchReducer from './reducer_search';
import MovieReducer from './reducer_movie';


const rootReducer = combineReducers({
  upcoming: UpcomingReducer,
  search: SearchReducer,
  movie: MovieReducer
})

export default rootReducer;