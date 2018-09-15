import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, InputEmail, InputPassword, LoginButon, Logo } from './style';
import axios from 'axios';

export class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
            correct: false,
            submited: false
        }
    }

    emailHandleChange = email => {
        this.setState({ email: email });
    }
    passwordHandleChange = password => {
        this.setState({ password: password });
    };

    submitValidation = () => {
         if((this.state.email !== null) && (this.state.password !== null)) 
            this.setState({correct: true});
                
    };

    putData = () => {
        if(this.state.correct){
            axios({
                method: 'POST',
                url: 'http://localhost:62938/api/account/signin',
                body: {
                    "Email": this.state.email,
                    "Password": this.state.password 
                }
            }).then((resp) =>{
                console.log(resp);
            })
        } 
    }

    render(){
        return( 
            <Grid>
                <Container>
                    <Logo>teachMe</Logo>
                    <InputEmail placeholder="e-mail" onChange={event => this.emailHandleChange(event.target.value)} error={(this.state.submited && !this.state.emial) ? true : undefined }/>
                    <InputPassword placeholder="hasło" type='password' onChange={event => this.passwordHandleChange(event.target.value)} error={(this.state.submited && !this.state.password) ? true : undefined }/>
                    <LoginButon primary onMouseOver={this.submitValidation} onClick={() => this.putData}>
                        <Link 
                            to={this.state.correct ? "/profil" : "/logowanie"}
                            style={{display: 'block', height: '100%', color: 'white'}} 
                        >Zaloguj się</Link>
                    </LoginButon>
                </Container>
            </Grid>
            );
    }
}; 