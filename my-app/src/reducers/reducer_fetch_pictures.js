import { FETCH_PICTURES } from "../actions/index";

export const fetchPictures = (state = [], action) => {
  switch (action.type) {
    case FETCH_PICTURES:
      if (action.payload) {
        return [...action.payload.data.hits];
      }
      break;
    default:
      return state;
  }
};
