import axios from 'axios';

export const GET_GAMES = "GET_GAMES";
export const GET_GAME_NAME = "GET_GAME_NAME";
export const GET_DETAIL = "GET_DETAIL";
export const GET_GENRES = "GET_GENRES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const FILTER_CREATED = "FILTER_CREATED";
export const FILTER_BY_GENRE = "FILTER_BY_GENRE";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const POST_GAME = "POST_GAME";

export function getGames() {
  return async function (dispatch) {
      var response = await axios.get("http://localhost:3001/videogames");
      dispatch({
      type: GET_GAMES,
      payload: response.data
  })  
}
};

export function getDetail(id) {
  if(id){
      return async function (dispatch) {
          try{
              const details = await axios.get(`http://localhost:3001/videogames/${id}`)
              dispatch ({ 
                  type: GET_DETAIL,
                  payload: details.data
              })
          }catch(e){
              console.log(e)
          }
      }
  }
  return {
      type: "RESET",
  }
};

export function getGameName(name) {
    return async function (dispatch) {
        try{
            let response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            dispatch({
                type: GET_GAME_NAME,
                payload: response.data
            })
        } catch(e){
            alert("Game not found");
        }
    }
};

export function getGenres() {
    return async function (dispatch) {
        var info = await axios.get("http://localhost:3001/genre", {});
         dispatch({
            type: GET_GENRES,
            payload: info.data
        })
    }
};

export function getPlatforms() {
    return async function (dispatch) {
        const info = await axios.get("http://localhost:3001/platform");
        dispatch({ 
            type: GET_PLATFORMS, 
            payload: info.data });
    };
};
export function postGame(payload) {
    return async function (dispatch) {
        const post = await axios.post("http://localhost:3001/videogames", payload);
        return {
            type: POST_GAME,
            post
        }
    }
}

export function filterDbCreated(payload) {
    return {
        type: FILTER_CREATED,
        payload,
    }
};

export function filterByGenre(payload) {
    return {
        type: FILTER_BY_GENRE,
        payload,
    }
};

export function orderByName(data) {
    return async(dispatch) =>{
        dispatch({
            type: ORDER_BY_NAME,
            payload: data,
        })
       
    }
};

export function orderByRating(payload) {
    return {
        type: ORDER_BY_RATING,
        payload,
    }
};


