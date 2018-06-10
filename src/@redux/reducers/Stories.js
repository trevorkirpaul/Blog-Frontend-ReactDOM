import TYPES from '@redux';

/*
  import our constants, we use these between
  the reducers and actions for each store's state
*/
const {
  STORIES: { FETCH_ALL, FETCH_ALL_COMPLETE, FETCH_ALL_FAIL },
} = TYPES;

/*
  initial state for reducer
*/

const storiesState = {
  loading: false,
  error: false,
  all: [],
};

/*
  This is our reducer, listens for dispatch types
  If an action is dispatched with on of these types,
  this function will set the new state for the reducer
  based on valeus returned from the dispatch
*/
export default (state = storiesState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case FETCH_ALL_COMPLETE:
      return {
        ...state,
        loading: false,
        error: false,
        all: action.all,
      };
    case FETCH_ALL_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
