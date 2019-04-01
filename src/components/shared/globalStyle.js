import { createGlobalStyle } from 'styled-components'
import { COLOUR_TERTIARY } from './globalColors';

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background: ${COLOUR_TERTIARY};
  }
`;