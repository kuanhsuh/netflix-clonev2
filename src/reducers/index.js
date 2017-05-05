import { combineReducers } from 'redux';
import UpcomingReducer from './reducer_upcoming';
import SearchReducer from './reducer_search';
import MovieReducer from './reducer_movie';
import CastReducer from './reducer_cast';
import TrailerReducer from './reducer_trailer';


const rootReducer = combineReducers({
  upcoming: UpcomingReducer,
  search: SearchReducer,
  movie: MovieReducer,
  cast: CastReducer, 
  trailers: TrailerReducer
})

export default rootReducer;