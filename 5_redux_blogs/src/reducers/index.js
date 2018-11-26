import { combineReducers } from 'redux';

const dummyReducer = (data=[], action) => {
    if (action.type ==="DUMMY_ACTION") {return action.payload;}
    //else
    return data;
}


 export default combineReducers({dummyData: dummyReducer})


