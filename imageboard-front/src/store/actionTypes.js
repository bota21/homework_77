import axios from "../axiosBoard";
import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_ERROR,
  POST_DATA,
} from "./actions";

const fetchData = () => {
  return { type: FETCH_DATA };
};
const fetchError = (error) => {
  return { type: FETCH_ERROR, error };
};
const fetchDataSuccess = (data) => {
  return { type: FETCH_DATA_SUCCESS, data };
};
const postData = () => {
  return { type: POST_DATA };
};

export const fetchRequest = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchData());
      const response = await axios.get("/ib");
      dispatch(fetchDataSuccess(response.data));
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};

export const sendRequest = (data) => {
  return async (dispatch) => {
    try {
      dispatch(fetchData());
      await axios.post("/ib", data);
      dispatch(postData());
    } catch (e) {
      dispatch(fetchError(e));
    }
  };
};
