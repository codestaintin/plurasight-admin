import _ from 'lodash';
import actionTypes from '../actions/actionTypes';

const initialState = {
  courses: [],
  isLoading: false,
  isSaving: false,
  currentPage: 1,
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.LOAD_COURSES_SUCCESS:
    return {
      ...state,
      courses: _.sortBy(action.courses, 'title')
    };

  case actionTypes.CREATE_COURSE_SUCCESS:
    return {
      ...state,
      courses: _.sortBy([...state.courses, action.course], 'title')
    };

  case actionTypes.UPDATE_COURSE_SUCCESS:
    return {
      ...state.courses,
      courses: [
        ...state.courses.filter(course => course.id !== action.course.id),
        action.course
      ]
    };
  case actionTypes.LOAD_SUCCESS:
    return {
      ...state,
      isLoading: action.bool
    };
  case actionTypes.SAVING_COURSE:
    return {
      ...state,
      isSaving: action.bool
    };
  case actionTypes.DELETE_COURSE_SUCCESS:
    return {
      ...state,
      courses: [...state.courses.filter(course => course.id !== action.id)]
    };
  case actionTypes.PAGE_CHANGE:
    return { ...state, currentPage: action.pageNumber };
  default:
    return state;
  }
};

export default courseReducer;
