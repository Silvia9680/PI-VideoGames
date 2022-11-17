
import { GET_GAMES } from './action';
import { GET_GAME_NAME } from './action';
import { GET_GENRES } from './action';
import { GET_PLATFORMS} from './action';
import { GET_DETAIL } from './action';
import { ORDER_BY_NAME } from './action';
import { ORDER_BY_RATING } from './action';
import { FILTER_BY_GENRE } from './action';
import { FILTER_CREATED } from './action';
import { POST_GAME } from './action';

const initialState = { 
    games: [], 
    allGames: [],
    genres: [],
    detail:[],
    platforms:[],
}

function rootReducer(state = initialState, action){
    switch(action.type){

        case "RESET":
            return {
                ...state,
                detail:[],
            };
        case GET_GAMES:
            return{
                ...state,
                games: action.payload,
                allGames: action.payload,
            }
        case GET_GAME_NAME:
            return {
                ...state,
                games: action.payload,
            }
            case GET_GENRES:
    return {
        ...state,
        genres: action.payload,
    }

    case GET_PLATFORMS:
    return {
        ...state,
        platforms: action.payload,
    }

    case POST_GAME:
        return {
            ...state,
        };

    case GET_DETAIL:
        return{
            ...state,
            detail: action.payload,
        };

    case ORDER_BY_NAME:
        
        let sortName = action.payload === "asc"?
        state.games.sort(function (a, b) {
            if(a.name > b.name) {
                return 1;
            }
            if(b.name > a.name) {
                return -1;
            }
            return 0;
        })
        :state.games.sort(function(a, b){
            if(a.name > b.name){
                return -1;
            }
            if(b.name > a.name){
                return 1;
            }
            return 0;
        });
     return {
         ...state,
         games: sortName,
     };
    
     case ORDER_BY_RATING:
     let sortRating = action.payload === "low" ?
     state.games.sort(function (a, b) {
         if (a.rating > b.rating) {
             return 1;
         }
         if (b.rating > a.rating) {
             return -1;
         }
         return 0;
     })
     :state.games.sort(function(a, b){
         if (a.rating > b.rating) {
             return -1;
         }
         if (b.rating > a.rating) {
             return 1;
         }
         return 0;
     });
     return {
         ...state,
         games: sortRating,
     };

     case FILTER_BY_GENRE:
     let allGames = state.allGames
     let filtered = action.payload === "all" ?
     state.allGames
     : allGames.filter(g => {
         return g.genres.find(g => {
             return g.name === action.payload;
         })
     });
     return {
         ...state,
         games: filtered,
     };

     case FILTER_CREATED:
    const allGames2 = state.allGames;
    const createdGame = action.payload === "created" ? 
    allGames2.filter(e => e.createInDb)
    : allGames2.filter(e=> !e.createInDb)
    
    //  state.allGames.filter(e => e.create)
    //  : state.allGames.filter(e => !e.create);
    // console.log(createdGame)
     
     return{
         ...state,
         games: action.payload === "all" ? state.allGames : createdGame,
     };

    default: return state;
    }     
    }

export default rootReducer;