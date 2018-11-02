import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import CourseList from '../../../components/Courses/CourseList';

configure({ adapter: new Adapter() });

describe('<CourseList>', () => {
  const props = {
    courses: [],
    handleDelete: jest.fn(() => {}),
  };

  it('renders the <CourseList> component', () => {
    const tree = shallow(<CourseList {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
