import actionTypes from '../actionTypes';
import courseApi from '../../api/mockCourseApi';

const loadCoursesSuccess = (courses) => ({
  type: actionTypes.LOAD_COURSES_SUCCESS,
  courses
});

const loadCourses = () => (dispatch) => courseApi
  .getAllCourses()
  .then(courses => dispatch(loadCoursesSuccess(courses)))
  .catch(error => {
    throw (error);
  });

export default loadCourses;
