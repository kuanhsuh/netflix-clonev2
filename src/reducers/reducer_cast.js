import { FETCH_CAST } from 'actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_CAST:
      const CAST = action.payload.data.cast.slice(0,6)
      return [CAST]
    default:
      return state;
  }
}