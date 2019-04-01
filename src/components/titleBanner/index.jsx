import React from 'react';
import { TitleBannerContainer, SmallImage, Heading } from './elements/titleBannerElements';

export default class TitleBanner extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <TitleBannerContainer>
        <SmallImage image={data.image} />
        <Heading>{data.heading}</Heading>
      </TitleBannerContainer> 
    );
  }
}


