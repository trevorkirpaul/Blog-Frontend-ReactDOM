import axios from 'axios';
import TYPES from '@redux';
import CONFIG from 'utils/config';

/*
  First we import our constants, just like in the reducer
*/

const { API } = CONFIG;

const {
  STORIES: { FETCH_ALL, FETCH_ALL_COMPLETE, FETCH_ALL_FAIL },
} = TYPES;

/*
  This is an action which gets dispatched from a component
  Normally actions are functions that return an object

  Since we are using redux-thunk, we can return
  functions in our actions. This allows us to
  run the fetch and return multiple dispatches
*/
export const fetchAllStories = () => dispatch => {
  // first we dispatch to tell the store we
  // are attempting a fetch
  dispatch({
    type: FETCH_ALL,
    loading: true,
    error: false,
  });

  // Next we preform the fetch
  axios
    .get(`${API}/blogposts`)
    .then(({ data }) => {
      // on success, we end with our successful dispatch
      return dispatch({
        type: FETCH_ALL_COMPLETE,
        loading: false,
        error: false,
        all: data.posts,
      });
    })
    .catch(err => {
      // or if we, fail we do the same
      // but with a different action
      return dispatch({
        type: FETCH_ALL_FAIL,
        loading: false,
        error: false,
      });
    });
};
