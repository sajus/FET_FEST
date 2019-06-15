import React from 'react';
import { shallow } from 'enzyme';
import Autosuggest from './autosuggest';

describe('<Autosuggest />', () => {
  test('renders', () => {
    const wrapper = shallow(<Autosuggest />);
    expect(wrapper).toMatchSnapshot();
  });
});
