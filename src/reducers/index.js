import { combineReducers } from 'redux';
import userReducer from './reducer_user';
import {selectedUserReducer} from './reducer_selected_user';
import usersReducer from './reducer_users';

const teachMe = combineReducers({
  user: userReducer,
  selectedUser: selectedUserReducer,
  //users: usersReducer,
});
  export default teachMe;