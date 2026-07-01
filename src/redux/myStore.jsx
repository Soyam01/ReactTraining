import { createStore } from "redux";
import counterReducer from "./counterReducer";

const myStore = createStore(counterReducer)

export default myStore;
