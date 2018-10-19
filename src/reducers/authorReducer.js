import actionTypes from '../actions/actionTypes';

const initialState = [];

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.LOAD_AUTHORS_SUCCESS:
    return action.authors;
  default:
    return state;
  }
};

export default authorReducer;
