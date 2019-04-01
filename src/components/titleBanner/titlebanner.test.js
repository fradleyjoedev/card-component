import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components'
import TitleBanner from '.';
import { SmallImage } from './elements/titleBannerElements';

describe('TitleBanner Component', () => {
  it('should render correctly', () => {
    const json = {
        "image": "image",
        "heading": "test"
    };
    const component = shallow(<TitleBanner data={json} />);
    
    expect(component).toMatchSnapshot();
  });

  it('should have a background image', () => {
    const imageURL = "image.jpg";

    const component = mount(<SmallImage image={imageURL}/>);
    
    expect(component).toHaveStyleRule('background-image', `url('${imageURL}')`);
  });
});