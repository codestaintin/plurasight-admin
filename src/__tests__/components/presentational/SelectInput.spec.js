import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import SelectInput from '../../../components/Commons/SelectInput';

configure({ adapter: new Adapter() });

describe('<SelectInput>', () => {
  const props = {
    name: '',
    label: '',
    onChange: jest.fn(() => {}),
    defaultOption: '',
    value: '',
    error: '',
    options: []
  };

  it('renders the <SelectInput> component', () => {
    const tree = shallow(<SelectInput {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
