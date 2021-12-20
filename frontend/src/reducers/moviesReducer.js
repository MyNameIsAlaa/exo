import {LOAD_MOVIES, ADD_FAVORITE, LOAD_FAVORITE} from '../actions/types';

const intitialState = {
    List: [],
    Favorites: []
}

const moviesReducer =  function(state = intitialState, action){
    switch(action.type){
        case LOAD_MOVIES:
            return {
                List: action.payload,
                Favorites: state.Favorites
            };
            break;
      case LOAD_FAVORITE:
                return {
                    ...state,
                    Favorites: action.payload,
                };
                break;
        case ADD_FAVORITE:
            return {
              ...state,
              Favorites: [
                  ...state.Favorites,
                  action.payload
              ]
            }
            break;
        default:
            return state;
    }
}

export default moviesReducer;