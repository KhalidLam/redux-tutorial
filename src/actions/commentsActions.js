// Create Redux action types
export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";

// Create Redux action creators that return an action
export const getComments = () => ({
  type: GET_COMMENTS,
});

export const getCommentSuccess = (comments) => ({
  type: GET_COMMENTS_SUCCESS,
  payload: comments,
});

export const getCommentsFailure = () => ({
  type: GET_COMMENTS_FAILURE,
});

// Combine them all in an asynchronous thunk
export function fetchComments(id) {
  return async (dispatch) => {
    dispatch(getComments());

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
      );
      const data = await response.json();

      dispatch(getCommentSuccess(data));
    } catch (e) {
      dispatch(getCommentsFailure());
    }
  };
}
