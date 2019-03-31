import React from 'react';
import { shallow } from 'enzyme';
import Card from '.';

describe('Card Component testing', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Card/>);
    
    expect(component).toMatchSnapshot();
  });
});