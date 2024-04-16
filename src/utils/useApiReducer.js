export const INITIAL_USE_API_STATE = {
  data: [],
  loading: false,
  error: false,
};

export const apiReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: false };
    case "FETCH_SUCCESS":
      return { ...state, data: action.payload, loading: false, error: false };
    case "FETCH_ERROR":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
