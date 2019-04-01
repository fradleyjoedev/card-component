import React from 'react';
import { shallow } from 'enzyme';
import Card from '.';

describe('Card Component', () => {
  it('should render correctly with props', () => {
    const json = {
      "image": "image",
      "banner": {
        "image": "image",
        "heading": "test"
      }
    };
    const component = shallow(<Card data={json}/>);
    
    expect(component).toMatchSnapshot();
  });
});