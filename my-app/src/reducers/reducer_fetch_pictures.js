import { FETCH_PICTURES } from "../actions/index";

export const fetchPictures = (state = null, action) => {
  switch (action.type) {
    case FETCH_PICTURES:
      if (action.payload) {
        return action.payload;
      }
      break;
    default:
      return state;
  }
};
