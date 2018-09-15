import React from 'react';
import { 
    Grid, 
    Container, 
    InputName, 
    InputSurname, 
    InputAge, 
    StyledTextArea, 
    Foto, 
    StyledForm, 
    SubmitButon, 
    SelectKnow, 
    SelectLearn 
    } from './style';

import { know } from './value';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Axios from 'axios';

class Profil extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            thisUser: props.user,
            name: null,
            surname: null,
            age: 0,
            description: null,
            submited: false,
            selectedKnow: [],
            selectedLearn: [],
            correct: false
        }
        console.log(props.user);
        }

    goToProfile = () => this.props.history.push('/główna');

    putData = () => {
        this.setState({submited: true});
        let its = this;
        Axios.put(`http://localhost:62938/api/account/update/${this.state.thisUser}`, {
            "Name": this.state.name,
            "Surname": this.state.surname,
            "Description": this.state.description,
            "Age": this.state.age,
            "TeachSkills": this.state.selectedKnow,
            "LearnSkills": this.state.selectedLearn
        }).then(function () {
            its.goToProfile();
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    nameHandleChange = name => {
        this.setState({ name: name });
    }
    
    surnameHandleChange = surname => {
        this.setState({ surname: surname });
    }

    ageHandleChange = age => {
        this.setState({ age: age });
    }

    descHandleChange = description => {
        this.setState({ description: description });
    }

    submitValidation = () => {
         if((this.state.name !== null) && (this.state.surname !== null) && (this.state.age !== null) && (this.state.description !== null)) 
            this.setState({correct: true});
    };

    selectedLearnHandleChange = select => {
        this.setState({ selectedLearn: [{"Name":select}] });
        console.log(select);
    }

    selectedKnowHandleChange = select => {
        this.setState({ selectedKnow: [{"Name":select}] });
        console.log(select);
    }

    change = (event) =>{
        this.setState({selectedKnow: event.target.value});
    }



    render(){
        return( 
            <Grid>
                <Container>
                    <Foto size='small' src='https://react.semantic-ui.com/images/wireframe/image.png'/>
                    <InputName placeholder="Imię" onChange={event => this.nameHandleChange(event.target.value)} error={ (this.state.submited && !this.state.name) ? true : undefined }/>
                    <InputSurname placeholder="Nazwisko" onChange={event => this.surnameHandleChange(event.target.value)} error={(this.state.submited && !this.state.surname) ? true : undefined }/>
                    <InputAge placeholder="Wiek" onChange={event => this.ageHandleChange(event.target.value)} error={(this.state.submited && !this.state.age) ? true : undefined }/>
                    <SelectKnow placeholder='What You know?' options={know} onChange={(e, { value }) => this.selectedKnowHandleChange(value)} error={(this.state.submited && !this.state.selectedKnow) ? true : undefined}/>
                    <SelectLearn placeholder='What You want to learn?' options={know} onChange={(e, { value }) => this.selectedLearnHandleChange(value)} error={(this.state.submited && !this.state.selectedLearn) ? true : undefined}/>
                    <StyledForm>
                        <StyledTextArea placeholder="Opis" onChange={event => this.descHandleChange(event.target.value)} error={(this.state.submited && !this.state.description) ? true : undefined }/>
                    </StyledForm>
                    <SubmitButon onClick={()=> this.putData()}>
                        <Link 
                            to={this.state.correct ? "/główna" : "/profil"}
                            style={{display: 'block', height: '100%', color: 'white'}} 
                        >Zatwierdź</Link>
                    </SubmitButon>
                </Container>
            </Grid>
        );
    }
}; 

function mapStateToProps(state){
    console.log(state.user);
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(Profil);