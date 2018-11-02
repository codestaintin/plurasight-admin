import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { ManageCoursePage } from '../../../components/Courses/ManageCoursePage';

configure({ adapter: new Adapter() });

describe('<ManageCoursePage>', () => {
  const props = {
    authors: [],
    actions: {
      saveCourse: jest.fn().mockImplementation(() => Promise.resolve()),
    },
    history: {
      push: {}
    },
    errors: {}
  };
  const wrapper = shallow(<ManageCoursePage {...props} />);

  it('should check for the componentDidMount method', () => {
    const spy = jest.spyOn(wrapper.instance(), 'componentDidMount');
    wrapper.instance().componentDidMount();
    expect(spy).toHaveBeenCalled();
  });

  it('should check for the componentWillReceiveProps method', () => {
    const spy = jest.spyOn(wrapper.instance(), 'componentWillReceiveProps');
    wrapper.instance().componentWillReceiveProps({
      course: {
        title: '',
        length: '',
        authorId: '',
        category: '',
        watchHref: '',
        isBlocking: false
      }
    });
    expect(spy).toHaveBeenCalled();
  });

  it('should check for the updateCourse method', () => {
    const spy = jest.spyOn(wrapper.instance(), 'updateCourse');
    wrapper.instance().updateCourse(
      {
        target: {
          name: '',
          value: ''
        }
      }
    );
    expect(spy).toHaveBeenCalled();
  });

  it('should check for the saveCourse method', () => {
    const spy = jest.spyOn(wrapper.instance(), 'saveCourse');
    wrapper.setState({
      course: {
        title: 'A plurasight course',
        length: '5:13',
        authorId: 'anId',
        category: 'Artificial intelligence',
      }
    });
    wrapper.instance().saveCourse(
      {
        preventDefault: jest.fn()
      }
    );
    expect(spy).toHaveBeenCalled();
  });
});
