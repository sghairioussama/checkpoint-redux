import { createStore } from "redux";
import rootReducer from "../Reducers/Index.js";

const store = createStore(rootReducer)

export default store