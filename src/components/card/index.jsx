import React from 'react';
import TitleBanner from '../titlebanner';
import { CardContainer, TileImage } from './elements/cardElements';

export default class Card extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <CardContainer>
        <TileImage src={data.image} alt={data.banner.heading} />
        <TitleBanner data={data.banner}/>
      </CardContainer> 
    );
  }
}