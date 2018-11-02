import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import { shallow, configure } from 'enzyme';
import NotFound from '../../../components/Commons/NotFound';

configure({ adapter: new Adapter() });

describe('<NotFound>', () => {
  let shallowComponent;
  beforeEach(() => {
    shallowComponent = shallow(<NotFound />);
  });

  it('renders the <NotFound> component', () => {
    const tree = toJson(shallowComponent);
    expect(tree).toMatchSnapshot();
  });
});
