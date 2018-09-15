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

export class Profil extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: null,
            surname: null,
            age: 0,
            description: null,
            submited: false,
            selectedKnow: null,
            selectedLearn: null,
            correct: false
        }
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
        this.setState({ selectedLearn: select });
        console.log(select);
    }

    selectedKnowHandleChange = select => {
        this.setState({ selectedKnow: select });
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
                    <SubmitButon onClick={()=>this.setState({submited: true})}>
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