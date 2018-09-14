import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Title, Subtitle, StyledButton } from './style';

export class Welcome extends React.Component {
    render(){
        return( 
            <Grid>
                <Title>
                    Poszerz swoje horyzonty
                </Title>
                <Subtitle>
                    i nauczaj innych tego co juz umiesz :)
                </Subtitle>
                <StyledButton inverted color='blue'>
                    <Link to="/logowanie" style={{display: 'block', height: '100%', color: 'black', paddingTop: '12px'}}>Zaloguj się</Link>
                </StyledButton>
            </Grid>
            );
    }
}; 