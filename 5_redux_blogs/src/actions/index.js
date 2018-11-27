import jsonPlaceholder from "../apis/jsonplaceholder";

const getPosts = () => {
  //an async action using thunk -> always returns a function that takes 2 args
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");

    //then manually dispatch the action from inside this inner function
    // type and payload property names cannot be changed. they are mandatory names
    dispatch({ type: "GET_POSTS", payload: response.data });
  };
};

const getUser = userId => {
  //an async action using thunk -> always returns a function that takes 2 args
  return async (dispatch, getState) => {
    // console.log("TRIGGERED for... ", userId);
    let path = `/users/${userId}`;
    const response = await jsonPlaceholder.get(path);

    //then manually dispatch the action from inside this inner function
    // type and payload property names cannot be changed. they are mandatory names
    dispatch({ type: "GET_USER", payload: response.data });
  };
};

export { getPosts, getUser };
