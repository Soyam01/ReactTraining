import { createStore } from "redux";
import counterReducer from "./counterReducer";
import personReducer from "./personReducer";

//const myStore = createStore(counterReducer)
const myStore = createStore(personReducer)


export default myStore;
