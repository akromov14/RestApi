import initialState from "./initialState";
import { SET_INPUT, SET_LIST } from "./types";

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SET_LIST: return {...state, list: action.payload}


        default: return state;
    }
}

export default reducer;