import { combineReducers } from "redux";
import { fetchPictures } from "./reducer_fetch_pictures";

const rootReducer = combineReducers({
  pictures: fetchPictures
});

export default rootReducer;
