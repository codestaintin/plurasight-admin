import actionTypes from '../actions/actionTypes';

const initialState = {
  courses: [],
  isLoading: false,
  isSaving: false
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.LOAD_COURSES_SUCCESS:
    return {
      ...state,
      courses: action.courses
    };

  case actionTypes.CREATE_COURSE_SUCCESS:
    return {
      ...state,
      courses: [...state.courses, action.course]
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
  default:
    return state;
  }
};

export default courseReducer;
