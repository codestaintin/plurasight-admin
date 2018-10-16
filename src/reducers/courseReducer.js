import actionTypes from '../actions/actionTypes';

const initialState = [];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.LOAD_COURSES_SUCCESS:
    return action.courses;
  default:
    return state;
  }
};

export default courseReducer;
