import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import CardData from './data/cardData.json';

ReactDOM.render(
  <Card data={CardData} />
  , document.querySelector('.app'));
