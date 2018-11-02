import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import HomePage from '../../../components/Home/HomePage';

configure({ adapter: new Adapter() });

describe('<HomePage>', () => {
  it('renders the <HomePage> component', () => {
    const tree = shallow(<HomePage />);
    expect(tree).toMatchSnapshot();
  });
});
