// Import all actions
import * as actions from "../actions/commentsActions";

export const initialState = {
  comments: [],
  loading: false,
  hasErrors: false,
};

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_COMMENTS:
      return { ...state, loading: true };

    case actions.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        hasErrors: false,
      };

    case actions.GET_COMMENTS_FAILURE:
      return { ...state, hasErrors: true, loading: false };

    default:
      return state;
  }
}
