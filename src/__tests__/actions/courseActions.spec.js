import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import actionTypes from '../../actions/actionTypes';
import { deleteCourse, loadCourses, saveCourse } from '../../actions/course/courseActions';
import courses from '../__mocks__/mockCourses';

const {
  LOAD_COURSES_SUCCESS,
  CREATE_COURSE_SUCCESS,
  UPDATE_COURSE_SUCCESS,
  LOAD_SUCCESS,
  SAVING_COURSE,
  DELETE_COURSE_SUCCESS
} = actionTypes;

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Courses actions', () => {
  it('should dispatch LOAD_COURSES_SUCCESS', (done) => {
    const expectedActions = [
      {
        type: LOAD_SUCCESS,
        bool: true
      },
      {
        courses,
        type: LOAD_COURSES_SUCCESS
      },
      {
        type: LOAD_SUCCESS,
        bool: false
      }
    ];
    const store = mockStore({});
    store.dispatch(loadCourses())
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('should dispatch CREATE_COURSE_SUCCESS', (done) => {
    const newCourse = {
      title: 'Building Applications in React and Flux',
      authorId: 'cory-house',
      length: '5:08',
      category: 'JavaScript'
    };
    const expectedActions = [
      {
        type: SAVING_COURSE,
        bool: true
      },
      {
        type: CREATE_COURSE_SUCCESS,
        course: {
          ...newCourse,
          id: 'Building-Applications-in-React-and-Flux',
          watchHref: 'http://www.pluralsight.com/courses/Building-Applications-in-React-and-Flux'
        }
      },
      {
        type: SAVING_COURSE,
        bool: false
      }
    ];
    const store = mockStore({});
    store.dispatch(saveCourse(newCourse))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
        done();
      });
  });
  it('should dispatch DELETE_COURSE_SUCCESS', (done) => {
    const expectedActions = [
      {
        type: DELETE_COURSE_SUCCESS,
        id: courses[1].id
      }
    ];
    const store = mockStore({});
    store.dispatch(deleteCourse(courses[1].id));
    expect(store.getActions()).toEqual(expectedActions);
    done();
  });

  it('should update course when passed UPDATE_COURSE_SUCCESS', (done) => {
    const expectedAction = [
      {
        type: SAVING_COURSE,
        bool: true
      },
      {
        type: UPDATE_COURSE_SUCCESS,
        course: courses[0]
      },
      {
        type: SAVING_COURSE,
        bool: false
      },
    ];

    const store = mockStore({ courses: [] });
    store.dispatch(saveCourse(courses[0]))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
        done();
      });
  });
});
