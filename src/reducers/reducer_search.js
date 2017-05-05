import { FETCH_SEARCH } from 'actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_SEARCH:
      const SEARCH = action.payload.data.results.slice(0,10)
      return SEARCH
    default:
      return state;
  }
}