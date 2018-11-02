import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { Header } from '../../../components/Commons/Header';

configure({ adapter: new Adapter() });

describe('<Header>', () => {
  const props = {
    courses: [{
      id: 'react-flux-building-applications',
      title: 'Building Applications in React and Flux',
      watchHref: 'http://www.pluralsight.com/courses/react-flux',
      authorId: 'cory-house',
      length: '5:08',
      category: 'JavaScript'
    }]
  };

  it('renders the <Header> component', () => {
    const tree = shallow(<Header {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
