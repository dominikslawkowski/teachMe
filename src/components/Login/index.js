import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, InputEmail, InputPassword, LoginButon, Logo } from './style';
import axios from 'axios';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { currentUser } from '../../actions/index';

class Login extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null,
            correct: false,
            submited: false,
            next: false
        }

        this.goToProfile = this.goToProfile.bind(this);
        this.sendLogin = this.sendLogin.bind(this);
    }

    goToProfile = () => this.props.history.push('/profil');

    emailHandleChange = email => {
        this.setState({ email: email });
    }
    passwordHandleChange = password => {
        this.setState({ password: password });
    };

    submitValidation = () => {
         if((this.state.email !== null) && (this.state.password !== null)) this.setState({correct: true});
    };

    sendLogin = () => {
        let its = this;
        this.setState({submited: true});
        console.log(this.state.correct);
        if(this.state.correct){
            axios.post("http://localhost:62938/api/account/signin",
                {
                "Email": this.state.email,
                "Password": this.state.password   
                }
            ).then(function (response) {
                its.props.user(response.data);
                its.goToProfile();
              })
              .catch(function (error) {
                console.log(error);
              })
        }
        
    }

    render(){
        return( 
            <Grid>
                <Container>
                    <Logo>teachMe</Logo>
                    <InputEmail placeholder="e-mail" onChange={event => this.emailHandleChange(event.target.value)} error={(this.state.submited && !this.state.email) ? true : undefined }/>
                    <InputPassword placeholder="hasło" type='password' onChange={event => this.passwordHandleChange(event.target.value)} error={(this.state.submited && !this.state.password) ? true : undefined }/>
                    <LoginButon primary onMouseOver={this.submitValidation} onClick={() => this.sendLogin()}>
                       Zaloguj się
                    </LoginButon>
                </Container>
            </Grid>
            );
    }

    
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        user: currentUser,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Login);
