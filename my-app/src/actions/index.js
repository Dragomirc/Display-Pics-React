import axios from "axios";
import { API_KEY } from "../config.js";

export const FETCH_PICTURES = "FETCH_PICTURES";
export const fetchPictures = (color, searchTerm) => {
  const request = axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${color}+${searchTerm}&image_type=photo`
  );

  return {
    action: FETCH_PICTURES,
    payload: request
  };
};
