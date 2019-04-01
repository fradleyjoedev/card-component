import { createGlobalStyle } from 'styled-components'
import { COLOUR_TERTIARY } from './globalColors';
import { MEDIAQUERY_FONT_TABLET, MEDIAQUERY_FONT_DESKTOP } from './globalMediaQueries';

export default createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background: ${COLOUR_TERTIARY};
    font-size: 100%;

    @media (min-width: ${MEDIAQUERY_FONT_TABLET}) {
      font-size: 150%;
    }

    @media (min-width: ${MEDIAQUERY_FONT_DESKTOP}) {
      font-size: 200%;
    }
  }
`;