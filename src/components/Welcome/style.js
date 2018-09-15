import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const Grid = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: auto 50% auto;
    grid-template-rows: 30% 90px 30px auto;
`;

export const Title = styled.div`
    justify-self: center;
    grid-area: 2/2/3/3;
    color: black;
    font-family: 'Raleway', sans-serif;
    font-size: 40px;
    
`;

export const Subtitle = styled.div`
    font-size: 20px;
    color: black;
    opacity: .9;
    grid-area: 2/2/3/3;
    font-family: 'Raleway', sans-serif;
    justify-self: center;
    margin-top: 40px;
    
`;

export const StyledButton = styled(Button)`
    grid-area: 3/2/4/3;
    justify-self: center;
    padding: 0 !important;
    width: 200px;
    height: 40px;
    color: black;
    transition: all .1s linear;
`;