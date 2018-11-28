import jsonPlaceholder from "../apis/jsonplaceholder";
import _ from 'lodash'

const getPosts = () => {
  //an async action using thunk -> always returns a function that takes 2 args- dispatch and getState
  return _getPosts;
};

const _getPosts = async (dispatch, getState) => {
  const response = await jsonPlaceholder.get("/posts");
  response.data.pop(); // the API has an extra empty post at the end!
  //then manually dispatch the action from inside this inner function
  // type and payload property names cannot be changed. they are mandatory names
  dispatch({ type: "GET_POSTS", payload: response.data });
};


// const getUser = id => async (dispatch, getState) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "GET_USER",
//     payload: response.data
//   });
// };

//********************  LOGIC  FOR MEMOIZE ******************************
/*
 function getuser  takes argument id
      -->  and returns function with dispatch + getState (needed for thunk async action creators)
          -->calls a "lodash.memoized" function that implements 
              --> and makes the network call (async)
              --> and calls dispatch
*/

const getUser = (id) => (dispatch, getState) => _getUserMemoized(id, dispatch)

async function _getUser(id, dispatch) {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  dispatch({
    type: "GET_USER",
    payload: response.data
  });
}

const _getUserMemoized = _.memoize(_getUser);


export { getPosts, getUser };
