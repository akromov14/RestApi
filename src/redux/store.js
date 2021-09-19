import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer";


const middleleware = [thunk];
const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleleware)));


export default store;