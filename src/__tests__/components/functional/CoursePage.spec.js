import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { CoursePage } from '../../../components/Courses/CoursesPage';

configure({ adapter: new Adapter() });

describe('<CoursePage>', () => {
  const props = {
    courses: [],
    actions: {
      deleteCourse: jest.fn(),
      pageChange: jest.fn()
    },
    page: 1,
    pageCount: 2
  };
  const wrapper = shallow(<CoursePage {...props} />);

  it('should check for the componentWillUpdate method', () => {
    wrapper.instance().componentWillUpdate({
      meta: {
        pageCount: 2,
        pageSize: 0,
      },
      currentPage: 2
    });
  });

  it('should simulate handleDelete', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleDelete');
    wrapper.instance().handleDelete({ id: '123' });
    expect(spy).toHaveBeenCalled();
  });

  it('should simulate handlePageClick', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handlePageClick');
    wrapper.instance().handlePageClick({ selected: '1' });
    expect(spy).toHaveBeenCalled();
  });
});
