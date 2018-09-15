import { combineReducers } from 'redux';
import userReducer from './reducer_user';
import skillReducer from './reducer_skill';
import usersReducer from './reducer_skill';

const teachMe = combineReducers({
  user: userReducer,
  skill: skillReducer,
  //users: usersReducer,
});
  export default teachMe;