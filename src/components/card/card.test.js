import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components'
import Card from '.';
import { CardContainer } from './elements/cardElements';

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

  it('should have a background image', () => {
    const imageURL = "image.jpg";

    const component = mount(<CardContainer image={imageURL}/>);
    
    expect(component).toHaveStyleRule('background-image', `url('${imageURL}')`);
  });
});