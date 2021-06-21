import styled from 'styled-components';

export const GridContainer = styled.div`
    display: grid;
    min-height: 100vh;
    width: 100%;
    grid-template-columns: 15rem 1fr;
    grid-template-areas: "sidebar main";
`;

export const MainContainer = styled.div`
    grid-area: main;
`; 