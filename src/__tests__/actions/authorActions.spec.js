import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import actionTypes from '../../actions/actionTypes';
import authorActions from '../../actions/author/authorActions';
import authors from '../__mocks__/mockAuthor';

const {
  LOAD_AUTHORS_SUCCESS
} = actionTypes;

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Author Actions', () => {
  it('it should dispatch LOAD_AUTHORS_SUCCESS', (done) => {
    const expectedActions = [{
      type: LOAD_AUTHORS_SUCCESS,
      authors
    }];
    const store = mockStore({});
    store.dispatch(authorActions())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
});
