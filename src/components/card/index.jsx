import React from 'react';
import TitleBanner from '../titlebanner';
import { CardContainer } from './elements/cardElements';

export default class Card extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <CardContainer image={data.image}>
        <TitleBanner data={data.banner}/>
      </CardContainer> 
    );
  }
}