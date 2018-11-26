import jsonPlaceholder from "../apis/jsonplaceholder";

//an async action using thunk -> always returns a function that takes 2 args

const dummyAction = () => {
  return async (dispatch, getState) => {
    const response = await jsonPlaceholder.get("/posts");
    console.log(response.data);

    //manually dispatch the action from inside this inner function
    dispatch({ type: "DUMMY_ACTION", payload: response });
  };
};

export { dummyAction };
