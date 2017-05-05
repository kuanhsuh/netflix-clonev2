import { FETCH_MOVIE } from 'actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_MOVIE:
      const MOVIE = action.payload
      return MOVIE
    default:
      return state;
  }
}