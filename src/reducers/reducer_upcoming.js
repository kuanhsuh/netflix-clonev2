import { FETCH_UPCOMING } from 'actions/index';

export default function(state = [], action){
  switch(action.type){
    case FETCH_UPCOMING:
      const UPCOMING = action.payload.data.results.slice(0,4)
      return [
                ...state,
                UPCOMING
            ]
    default:
      return state;
  }
}