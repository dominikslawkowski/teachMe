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
    &.ui.inverted.blue.button, &.ui.inverted.blue.buttons.button {
        -webkit-box-shadow: 0 0 0 2px #333 inset!important; 
        box-shadow: 0 0 0 2px #333 inset!important;
        &:hover{
            background: rgba(0,0,0,0.2);
            -webkit-box-shadow: 0 0 0 2px rgba(0,0,0,0.2) inset!important; 
            box-shadow: 0 0 0 2px rgba(0,0,0,0.2) inset!important;
        }
    }
`;