import { combineReducers } from 'redux';

const dummyReducer = (name=null, action) => {
    if (action.type ==="DUMMY_ACTION") {return action.payload.name;}
    //else
    return name;
}


 export default combineReducers({dummyData: dummyReducer})


