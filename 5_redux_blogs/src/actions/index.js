import jsonPlaceholder from "../apis/jsonplaceholder";



const getPosts = () => {
  //an async action using thunk -> always returns a function that takes 2 args
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");
    // console.log(response.data);

    //then manually dispatch the action from inside this inner function
    dispatch({ type: "GET_POSTS", payload: response });
  };
};

export { getPosts };
