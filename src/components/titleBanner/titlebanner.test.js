import React from 'react';
import { shallow } from 'enzyme';
import TitleBanner from '.';

describe('TitleBanner Component', () => {
  it('should render correctly', () => {
    const json = {
        "image": "image",
        "heading": "test"
    };
    const component = shallow(<TitleBanner data={json} />);
    
    expect(component).toMatchSnapshot();
  });
});