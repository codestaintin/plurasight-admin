import courseReducer from '../../reducers/courseReducer';
import courses from '../__mocks__/mockCourses';
import actionTypes from '../../actions/actionTypes';

describe('Courses Reducer', () => {
  const initialState = {
    courses: [],
    isLoading: false,
    isSaving: false,
    currentPage: 1,
  };
  it('should return initial state', () => {
    expect(courseReducer(undefined, { courses: [] })).toEqual(initialState);
  });
  it('should get response type of LOAD_COURSES_SUCCESS', () => {
    const action = {
      type: actionTypes.LOAD_COURSES_SUCCESS,
      courses
    };
    expect(courseReducer(initialState, action))
      .toEqual({
        courses,
        currentPage: 1,
        isLoading: false,
        isSaving: false
      });
  });
  it('should get response type of CREATE_COURSE_SUCCESS', () => {
    const action = {
      type: actionTypes.CREATE_COURSE_SUCCESS,
      course: courses[0]
    };
    expect(courseReducer(initialState, action))
      .toEqual({
        courses: [courses[0]],
        currentPage: 1,
        isLoading: false,
        isSaving: false
      });
  });
  it('should get response type of UPDATE_COURSE_SUCCESS', () => {
    const action = {
      type: actionTypes.UPDATE_COURSE_SUCCESS,
      course: courses[0]
    };
    expect(courseReducer(initialState, action))
      .toEqual({
        courses: [courses[0]]
      });
  });
  it('should get response type of LOAD_SUCCESS', () => {
    const action = {
      type: actionTypes.LOAD_SUCCESS,
      isLoading: true
    };
    expect(courseReducer(initialState, action))
      .toEqual({
        courses: [],
        currentPage: 1,
        isSaving: false
      });
  });
  it('should get response type of SAVING_COURSE', () => {
    const action = {
      type: actionTypes.SAVING_COURSE,
      isLoading: true
    };
    expect(courseReducer(initialState, action))
      .toEqual({
        courses: [],
        currentPage: 1,
        isLoading: false
      });
  });
  it('should get response type of DELETE_COURSE_SUCCESS', () => {
    const action = {
      type: actionTypes.DELETE_COURSE_SUCCESS,
      courseId: courses[0].id
    };
    expect(courseReducer(initialState, action))
      .toEqual({
        courses: [],
        currentPage: 1,
        isLoading: false,
        isSaving: false
      });
  });
  it('should get response type of PAGE_CHANGE', () => {
    const action = {
      type: actionTypes.PAGE_CHANGE
    };
    expect(courseReducer(initialState, action))
      .toEqual({
        courses: [],
        isLoading: false,
        isSaving: false
      });
  });
});
