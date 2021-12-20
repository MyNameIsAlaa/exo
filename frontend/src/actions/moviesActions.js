import {LOAD_MOVIES, ADD_FAVORITE, LOAD_FAVORITE} from './types';
import config from '../config/config';
import axios from 'axios';

export const fetchFavorites = () => async (dispatch) =>{
  const url = config.API_URL + '/favorites/';
  const result = await axios.get(url);
  dispatch({
      type: LOAD_FAVORITE,
      payload: result['data']
  })
}

export const fetchMovies = () => async (dispatch) =>{
    const url = config.API_URL + '/movies/top';
    const result = await axios.get(url);
    const movies = result['data']['results'].splice(0, 10);
    dispatch({
        type: LOAD_MOVIES,
        payload: movies
    })
  }

export const addFavorite = (movie) => async (dispatch) =>{
    const url = config.API_URL + '/favorites/add';
    const result = await axios.post(url, {
        id: movie.id,
        original_title: movie.original_title,
        poster_path: movie.poster_path,
        overview: movie.overview
    });
    dispatch({
        type: ADD_FAVORITE,
        payload: result['data']
    })
  }


  
  export const searchMovies = (keyword) => async (dispatch) =>{
    const url = config.API_URL + `/movies/search/${keyword}`;
    const result = await axios.get(url);
    const movies = result['data']['results'].splice(0, 10);
    dispatch({
        type: LOAD_MOVIES,
        payload: movies
    })
  }