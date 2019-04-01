import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components'
import Card from '.';
import { TileImage } from './elements/cardElements';

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

  it('should have a image', () => {
    const imageURL = "image.jpg";

    const image = mount(<TileImage src={imageURL} />);

    expect(image.find("img").prop("src")).toEqual(imageURL);
  });
});