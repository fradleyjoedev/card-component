import React from 'react';
import { shallow } from 'enzyme';
import TitleBanner from '.';

describe('TitleBanner Component', () => {
  it('should render correctly', () => {
    const component = shallow(<TitleBanner />);
    
    expect(component).toMatchSnapshot();
  });
});