import { combineReducers } from 'redux';

const dummyReducer = (data=[], action) => {
    if (action.type === "DUMMY_ACTION") {
        console.log('matching action  :', action);
        return action.payload
    }
    //else
    console.log('no matching action received');
    return data;
}


 export default combineReducers({dummyData: dummyReducer})


