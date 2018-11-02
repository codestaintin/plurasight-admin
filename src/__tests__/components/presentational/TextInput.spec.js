import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import TextInput from '../../../components/Commons/TextInput';

configure({ adapter: new Adapter() });

describe('<TextInput>', () => {
  const props = {
    name: '',
    label: '',
    onChange: jest.fn(() => {})
  };

  it('renders the <TextInput> component', () => {
    const tree = shallow(<TextInput {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
