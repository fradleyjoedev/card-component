import styled from 'styled-components'
import { COLOUR_PRIMARY, COLOUR_SECONDARY } from '../../shared/globalColors';
import { MEDIAQUERY_TABLET } from '../../shared/globalMediaQueries';

export const TitleBannerContainer = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 100%
    height: 28%;
    background: ${COLOUR_SECONDARY};
    padding: 1rem;
    box-sizing: border-box;
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
    font-size: 2.1rem;
    width: 80%;
    padding-left: 1%;
`;