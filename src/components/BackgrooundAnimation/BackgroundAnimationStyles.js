import styled from 'styled-components';

export const DivAnimation = styled.div`
    svg{
        width: 55rem;
        position: absolute;
        display: flex; 
        right: -5rem;
        top: 5.5rem;
        @media only Screen and (max-width: 60em) {
            display: none;
         }
    }
`;
