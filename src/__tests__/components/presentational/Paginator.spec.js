import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import Paginator from '../../../components/Commons/Paginator';

configure({ adapter: new Adapter() });

describe('<Paginator>', () => {
  const props = {
    pageCount: 2,
    page: 1,
    handlePageClick: jest.fn(() => {})
  };

  it('renders the <Paginator> component', () => {
    const tree = shallow(<Paginator {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
