import AuthorApi from '../../api/mockAuthorApi';
import actionTypes from '../actionTypes';

const loadAuthorsSuccess = (authors) => ({
  type: actionTypes.LOAD_AUTHORS_SUCCESS,
  authors
});

const loadAuthors = () => (dispatch) => AuthorApi
  .getAllAuthors()
  .then(authors => dispatch(loadAuthorsSuccess(authors)))
  .catch(error => {
    throw (error);
  });

export default loadAuthors;
