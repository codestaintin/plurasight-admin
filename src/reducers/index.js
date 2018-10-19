import { combineReducers } from 'redux';
import allCourses from './courseReducer';
import authors from './authorReducer';

export default combineReducers({
  allCourses,
  authors
});
