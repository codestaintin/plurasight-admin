import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import AboutPage from '../../../components/About/AboutPage';

configure({ adapter: new Adapter() });

describe('<AboutPage>', () => {
  it('renders the <AboutPage> component', () => {
    const tree = shallow(<AboutPage />);
    expect(tree).toMatchSnapshot();
  });
});
