import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import CourseListRow from '../../../components/Courses/CourseListRow';

configure({ adapter: new Adapter() });

describe('<CourseListRow>', () => {
  const props = {
    course: {
      id: '1'
    },
    handleDelete: jest.fn(() => {}),
  };

  it('renders the <CourseListRow> component', () => {
    const tree = shallow(<CourseListRow {...props} />);
    expect(tree).toMatchSnapshot();
  });

  it('should simulate handleDelete', () => {
    const tree = shallow(<CourseListRow {...props} />);
    tree.find('button').simulate('click');
  });
});
