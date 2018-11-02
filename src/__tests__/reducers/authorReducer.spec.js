import authorReducer from '../../reducers/authorReducer';
import authors from '../__mocks__/mockAuthor';
import actionTypes from '../../actions/actionTypes';

describe('Author reducer', () => {
  const initialState = [];
  it('should return initial state', () => {
    expect(authorReducer(undefined, { authors: [] })).toEqual(initialState);
  });

  it('should return all authors when passed LOAD_AUTHORS_SUCCESS', () => {
    const action = {
      type: actionTypes.LOAD_AUTHORS_SUCCESS,
      authors
    };
    expect(authorReducer(authors, action)).toEqual(authors);
  });
});
