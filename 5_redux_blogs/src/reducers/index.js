import { combineReducers } from "redux";

import postsReducer from "./postsReducer";


//the keys here become the keys in the Redux store/state
//and get 'pulled off' the store/state n the mapStateToProps method
export default combineReducers({
  posts: postsReducer
});
