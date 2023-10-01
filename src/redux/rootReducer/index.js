import { combineReducers } from "redux";
import todosSlice from "../slices/todosSlice";

const rootReducer = combineReducers({
  data: todosSlice
});

export default rootReducer;