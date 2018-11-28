import jsonPlaceholder from "../apis/jsonplaceholder";
import _ from "lodash";

/*
*******************  LOGIC  FOR ASYNC ACION CREATORS ******************************

 action creator function  takes X argument (if any)
      -->  and **RETURNS** an async function 
          -->  which accepts  dispatch fn + getState fn as arguments
                --> and makes async-calls to network API
                --> and then calls dispatch with an action object constructed from result of async calls

*/
const getPostsAndUsers = () => {
  console.log('GET POSTS AND USERS called')
  return async function(dispatch, getState) {
    let getPostsReturnedFuction = getPosts(); //returns a function, in this case, _getPosts, which is async
    await dispatch(getPostsReturnedFuction); //dispatching function = thunk will immediately invoke it
    let posts = getState().posts;

    const userIds = _.map(posts, "userId"); //pulls of userId from each post object
    const uniqueUserIds = _.uniq(userIds); //returns array of unique ids from array of ids
    uniqueUserIds.forEach(id => {
      dispatch(getUser(id));
    });
  };
};
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

const getUser = id => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({
      type: "GET_USER",
      payload: response.data
    });
  };
};
//********************  LOGIC  FOR MEMOIZE ******************************
/*
 function getuser  takes argument id
      -->  and returns function with dispatch + getState (needed for thunk async action creators)
          -->calls a "lodash.memoized" function that implements 
              --> and makes the network call (async)
              --> and calls dispatch
*/

// const getUser = id => (dispatch, getState) => _getUserMemoized(id, dispatch);

// async function _getUser(id, dispatch) {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({
//     type: "GET_USER",
//     payload: response.data
//   });
// }

// const _getUserMemoized = _.memoize(_getUser);

export { getPosts, getPostsAndUsers, getUser };
