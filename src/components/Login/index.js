import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, InputEmail, InputPassword, LoginButon, Logo } from './style';


export class Login extends React.Component {
    render(){
        return( 
            <Grid>
                <Container>
                    <Logo>teachMe</Logo>
                    <InputEmail placeholder="e-mail" />
                    <InputPassword placeholder="hasło"/>
                    <LoginButon primary>Zaloguj się</LoginButon>
                </Container>
            </Grid>
            );
    }
}; 