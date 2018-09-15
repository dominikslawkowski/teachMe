import styled from 'styled-components';
import { Button, Input } from 'semantic-ui-react';

export const Grid = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-columns: auto 50% auto;
    grid-template-rows: 25% 500px 30px auto;
`;

export const Container = styled.div`
    justify-self: center;
    grid-area: 2/2/3/3;
    display: grid;
    grid-template-columns: 50px 1fr 50px; 
    grid-template-rows: 1fr repeat(3, 30px) 1fr;
    grid-gap: 10px;
    box-shadow: 0px 4px 6px rgba(41, 41, 41, 0.2);
    width: 400px;
    height: 200px;
`;

export const InputEmail = styled(Input)` 
    grid-area: 2/2/3/3;
    justify-self: center;
    width: 200px;
    height: 30px;
`; 

export const InputPassword = styled(Input)`
    grid-area: 3/2/4/3;
    justify-self: center;
    width: 200px;
    height: 30px;
`; 

export const LoginButon = styled(Button)`
    grid-area: 4/2/5/3;
    width: 200px;
    height: 40px;
    justify-self: center;
    &.ui.primary.button, &.ui.inverted.blue.buttons.button {
        -webkit-box-shadow: 0 0 0 2px #555 inset!important; 
        box-shadow: 0 0 0 2px #555 inset!important;
        background: rgba(0,0,0,0.6);
        &:hover{
            background: rgba(0,0,0,0.2);
            -webkit-box-shadow: 0 0 0 2px rgba(0,0,0,0.2) inset!important; 
            box-shadow: 0 0 0 2px rgba(0,0,0,0.2) inset!important;
        }
    }
`;

export const Logo = styled.span`
    grid-area: 1/2/2/3;
    font-size: 24px;
    color: black;
    letter-spacing: 2px;
    justify-self: center;
    font-family: 'Raleway', sans-serif;
    margin-top: 10px;
`;