import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import CourseForm from '../../../components/Courses/CourseForm';

configure({ adapter: new Adapter() });

describe('<CourseForm>', () => {
  const props = {
    course: {},
    allAuthors: [],
    onChange: jest.fn(() => {}),
    onSubmit: jest.fn(() => {}),
    errors: {
      title: ''
    }
  };

  it('renders the <CourseForm> component', () => {
    const tree = shallow(<CourseForm {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
