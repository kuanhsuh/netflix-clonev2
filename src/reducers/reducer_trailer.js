import { FETCH_TRAILER } from 'actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_TRAILER:
      const TRAILER = action.payload.data.results.slice(0,2)
      return TRAILER
    default:
      return state;
  }
}