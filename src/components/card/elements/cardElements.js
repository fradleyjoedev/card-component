import styled from 'styled-components'

//Made the assumption that the image should cover the container
export const CardContainer = styled.div`
    background-image: url('${props => props.image}');
    background-size: cover;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-end;
    width: 100%;
    height: 100%;
`;