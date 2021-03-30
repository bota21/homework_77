import {
  FETCH_DATA,
  FETCH_ERROR,
  FETCH_DATA_SUCCESS,
  POST_DATA,
} from "./actions";

const initialState = {
  messages: [],
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, loading: true };
    case FETCH_ERROR:
      return { ...state, error: action.error, loading: false };
    case FETCH_DATA_SUCCESS:
      return { ...state, messages: action.data, loading: false };
    case POST_DATA:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
