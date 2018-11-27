import { combineReducers } from "redux";

import postsReducer from "./postsReducer";
import userReducer from './userReducer'


//this CREATES the central redux store and
//the keys here become the keys in the Redux store/state
//and get 'pulled off' the store/state in the mapStateToProps method
export default combineReducers({
  posts: postsReducer,
  users: userReducer //is an array that accumulates objects of user data
});
