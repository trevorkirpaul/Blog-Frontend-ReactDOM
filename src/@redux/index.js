/*
  This is where we will keep out types
  for redux actions / reducers
*/

const TYPES = {
  USERS: {
    CREATE: '@@USERS/CREATE',
    DELETE: '@@USERS/DELETE',
  },
  BLOGPOST: {
    CREATE: '@@BLOGPOST/CREATE',
    DELETE: '@@BLOGPOST/DELETE',
  },
  STORIES: {
    FETCH_ALL: '@@STORIES/FETCH/ALL/START',
    FETCH_ALL_COMPLETE: '@@STORIES/FETCH/ALL/COMPLETE',
    FETCH_ALL_FAIL: '@@STORIES/FETCH/ALL/FAIL',
  },
};

export default TYPES;
