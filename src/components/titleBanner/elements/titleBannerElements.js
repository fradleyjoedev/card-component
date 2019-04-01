import styled from 'styled-components'
import { COLOUR_PRIMARY, COLOUR_SECONDARY } from '../../shared/globalColors';
import { MEDIAQUERY_TABLET } from '../../shared/globalMediaQueries';

export const TitleBannerContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%
    height: 20%;
    background: ${COLOUR_SECONDARY};
    padding: 2% 1%;
`;

export const SmallImage = styled.span`
    background-image: url('${props => props.image}');
    height: 100%;
    width: 20%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

export const Heading = styled.h2`
    color: ${COLOUR_PRIMARY};
    font-size: 5.2vw;
    width: 80%;
    padding-left: 2%;

    @media (min-width: ${MEDIAQUERY_TABLET}) {
        font-size: 3.2vw;
    }
`;