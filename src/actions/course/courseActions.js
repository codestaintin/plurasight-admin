import toastr from 'toastr';
import actionTypes from '../actionTypes';
import courseApi from '../../api/mockCourseApi';

const loadCoursesSuccess = (courses) => ({
  type: actionTypes.LOAD_COURSES_SUCCESS,
  courses
});

const createCourseSuccess = (course) => ({
  type: actionTypes.CREATE_COURSE_SUCCESS,
  course
});

const updateCourseSuccess = (course) => ({
  type: actionTypes.UPDATE_COURSE_SUCCESS,
  course
});

const isLoading = (bool) => ({
  type: actionTypes.LOAD_SUCCESS,
  bool
});

const isSaving = (bool) => ({
  type: actionTypes.SAVING_COURSE,
  bool
});

const deleteCourseSuccess = (id) => ({
  type: actionTypes.DELETE_COURSE_SUCCESS,
  id
});

export const loadCourses = () => (dispatch) => {
  dispatch(isLoading(true));
  return courseApi
    .getAllCourses()
    .then((courses) => {
      dispatch(loadCoursesSuccess(courses));
      dispatch(isLoading(false));
    })
    .catch(error => {
      throw (error);
    });
};


export const saveCourse = (course) => (dispatch) => {
  dispatch(isSaving(true));
  return courseApi
    .saveCourse(course)
    .then(savedCourse => {
      course.id
        ? dispatch(updateCourseSuccess(savedCourse))
        : dispatch(createCourseSuccess(savedCourse));
      toastr.success('Save successful');
      toastr.clear();
      dispatch(isSaving(false));
    })
    .catch(error => {
      toastr.error(error);
      toastr.clear();
      dispatch(isSaving(false));
      throw (error);
    });
};

export const deleteCourse = (id) => (dispatch) => {
  dispatch(deleteCourseSuccess(id));
  toastr.success('Deletion successful');
  toastr.clear();
};
