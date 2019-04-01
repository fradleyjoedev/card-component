import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import CardData from './data/cardData.json';
import GlobalStyle from './components/shared/globalStyle';

ReactDOM.render(
  <div className='container'>
    <GlobalStyle />
    <Card data={CardData} />
  </div>
  , document.querySelector('.app'));
