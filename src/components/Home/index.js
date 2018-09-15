import React from 'react';
import {Card, Button} from 'semantic-ui-react';
import {HomeWrapper} from './style.js';
import MainTilt from './MainTilt/index';
import BackTilt from './BackTilt/index';
import {ButtonsWrapper} from './style.js';
import axios from 'axios';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel, faLightbulb, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faLightbulb, faTimesCircle)

function currentPersonData() {
    return [{
                name: 'Afm',
                surname: 'Nazwisko',
                age: '16',
                description: 'opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.',
                teachSkills: [{id:123, name: 'biologia'}, {id:124, name: 'matma'}, {id:125, name: 'fizyka'}, {id:126, name: 'biologia'}, {id:127, name: 'nocne kodowanie'}],
                learnSkills:  [{id:123, name: 'muzyka'}, {id:124, name: 'gitara'}, {id:125, name: 'arts&crafts'}, {id:126, name: 'biologia'}, {id:127, name: 'bolimienoga'}],
                ocena: 5
            },

    {
                name: 'Imie',
                surname: 'Noniewiem',
                age: '26',
                description: 'opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.',
                teachSkills: [{id:123, name: 'biologia'}, {id:124, name: 'matma'}, {id:125, name: 'fizyka'}, {id:126, name: 'biologia'}, {id:127, name: 'nocne kodowanie'}],
                learnSkills:  [{id:123, name: 'muzyka'}, {id:124, name: 'gitara'}, {id:125, name: 'arts&crafts'}, {id:126, name: 'biologia'}, {id:127, name: 'bolimienoga'}],
                ocena: 5
            },

    {
                name: 'Isaak',
                surname: 'Nazwisko',
                age: '456',
                description: 'opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.',
                teachSkills: [{id:123, name: 'biologia'}, {id:124, name: 'matma'}, {id:125, name: 'fizyka'}, {id:126, name: 'biologia'}, {id:127, name: 'nocne kodowanie'}],
                learnSkills:  [{id:123, name: 'muzyka'}, {id:124, name: 'gitara'}, {id:125, name: 'arts&crafts'}, {id:126, name: 'biologia'}, {id:127, name: 'bolimienoga'}],
                ocena: 5
            },

   {
                name: 'Asdf',
                surname: 'Asdf',
                age: '26',
                description: 'opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.',
                teachSkills: [{id:123, name: 'biologia'}, {id:124, name: 'matma'}, {id:125, name: 'fizyka'}, {id:126, name: 'biologia'}, {id:127, name: 'nocne kodowanie'}],
                learnSkills:  [{id:123, name: 'muzyka'}, {id:124, name: 'gitara'}, {id:125, name: 'arts&crafts'}, {id:126, name: 'biologia'}, {id:127, name: 'bolimienoga'}],
                ocena: 5
            },

    {
                name: 'JanekImie',
                surname: 'Kowalski',
                age: '26',
                description: 'opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.',
                teachSkills: [{id:123, name: 'biologia'}, {id:124, name: 'matma'}, {id:125, name: 'fizyka'}, {id:126, name: 'biologia'}, {id:127, name: 'nocne kodowanie'}],
                learnSkills:  [{id:123, name: 'muzyka'}, {id:124, name: 'gitara'}, {id:125, name: 'arts&crafts'}, {id:126, name: 'biologia'}, {id:127, name: 'bolimienoga'}],
                ocena: 5
            }];
}

class Home extends React.Component {

    constructor(props){
        super(props);
        this.manageClickEv=this.manageClickEv.bind(this);
        this.state = {
            currentPerson: {
                name: 'Imie',
                surname: 'Nazwisko',
                age: '36',
                description: 'opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.',
                teachSkills: [],
                learnSkills:  [],
                ocena: 5,
                wantMe: null,
                urlToImage: 0,
            },
            people: currentPersonData(),
            count: 0,
        };
        //this.sendRequest();
    }

    sendRequest(){
        let its = this;
        axios.get('http://localhost:62938/api/account').then(data=>{its.setState({
            people: data.data
        })});
    }

    manageClickEv(e){
        let accept = e.target.innerText==='Akceptuj'?true:false;
        if(accept){
          this.acceptPersona();
        } else {
         this.rejectPersona();
        }
    }

    acceptPersona(){
        console.log('akceptuję');
    
    

        this.animatePersona();
    }

    rejectPersona(){
        console.log('odrzucam');
        this.animatePersona();
    }

    animatePersona(){
        let mainTilt = document.querySelector('.main-tilt-data');
        mainTilt.classList.add('animate-this'); 
        let backA=document.querySelector('.back-tilt-data-left');
        let backB=document.querySelector('.back-tilt-data-right');
        backA.classList.add('animate-this_back-tilt');
        backB.classList.add('animate-this_back-tilt');

        let its = this;
        setTimeout(
            function(){
                let leng = its.state.people.length;
                var x;
                if (its.state.count<leng-1){
                    x=its.state.count;
                } else {
                    x=0;
                    its.setState({
                        count: 0
                    })
                }
                its.setState({
                    currentPerson: its.state.people[x],
                    count: its.state.count + 1
                })
                mainTilt.classList.remove('animate-this');
                backA.classList.remove('animate-this_back-tilt');
                backB.classList.remove('animate-this_back-tilt');

            },300
        )       
    }
 
    render () {
        
        return(
            <HomeWrapper>

                <ButtonsWrapper>
                   <p>Z kim chcesz wiedzieć?</p>
                </ButtonsWrapper>

                <Card.Group className="slider-maciek">
                    <BackTilt className="back-tilt-data-left"/>
                    <MainTilt className="main-tilt-data" theUserData={this.state.currentPerson}/> 
                    <BackTilt className="back-tilt-data-right"/>
                </Card.Group>

                <ButtonsWrapper>
                    <Button className="reject" onClick={(e)=>this.manageClickEv(e)}>
                        
                        <FontAwesomeIcon icon="times-circle"/>
                        Odrzuć

                    </Button>
                    <Button className="accept" onClick={(e)=>this.manageClickEv(e)}>
                        
                        <FontAwesomeIcon icon="lightbulb"/>
                        Akceptuj
                    </Button>
                </ButtonsWrapper>
            </HomeWrapper>
        )
    }
}
export default Home;
