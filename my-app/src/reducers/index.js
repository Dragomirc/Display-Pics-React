import { combinedReducers } from "redux";
import { fetchPictures } from "./reducer_fetch_pictures";

const rootReducer = combinedReducers({
  pictures: fetchPictures
});

export default rootReducer;
