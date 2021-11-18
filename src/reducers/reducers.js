import { combineReducers, createStore } from "redux";
import enemyReducer from "./enemyReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
    game: gameReducer,
    enemyGame: enemyReducer,
})