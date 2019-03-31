import React from 'react';
import TitleBanner from '../titlebanner';
import CardContainer from './elements/cardContainer';
import GlobalStyle from '../global/globalStyle';

export default class Card extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    const { data } = this.props;

    return (
      <div>
        <GlobalStyle />
        <CardContainer image={data.image}>
          <TitleBanner data={data.banner}/>
        </CardContainer> 
      </div>   
    );
  }
}


