import React from 'react';
import {Card, Button} from 'semantic-ui-react';
import {HomeWrapper} from './style.js';
import {Imag} from './style.js';
import MainTilt from './MainTilt/index';
import BackTilt from './BackTilt/index';
import {ButtonsWrapper} from './style.js';
import axios from 'axios';

function currentPersonData() {
    return [{
        imie: 'Imie sNazwisko',
        wiek: '46',
        opis: 'opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.',
        oferuje: ['biologia', 'matma', 'fizyka', 'gotowanie', 'naprawa aut', 'matma', 'fizyka', 'gotowanie', 'naprawa aut'],
        szukam: ['gitara', 'programowanie', 'art'],
        ocena: 5
    },

    {
        imie: 'DrugieImie Nazwisko',
        wiek: '16',
        opis: 'opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.',
        oferuje: ['biologia', 'matma', 'fizyka', 'gotowanie', 'naprawa aut', 'matma', 'fizyka', 'gotowanie', 'naprawa aut'],
        szukam: ['gitara', 'programowanie', 'art'],
        ocena: 5
    },

    {
        imie: 'TrzecieImie Nazwisko',
        wiek: '56',
        opis: 'opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.',
        oferuje: ['biologia', 'matma', 'fizyka', 'gotowanie', 'naprawa aut', 'matma', 'fizyka', 'gotowanie', 'naprawa aut'],
        szukam: ['gitara', 'programowanie', 'art'],
        ocena: 5
    },

    {
        imie: 'DrugieImiasasase Nazwisko',
        wiek: '16',
        opis: 'opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.',
        oferuje: ['biologia', 'matma', 'fizyka', 'gotowanie', 'naprawa aut', 'matma', 'fizyka', 'gotowanie', 'naprawa aut'],
        szukam: ['gitara', 'programowanie', 'art'],
        ocena: 5
    },

    {
        imie: 'dagieImie Nazwisko',
        wiek: '16',
        opis: 'opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.',
        oferuje: ['biologia', 'matma', 'fizyka', 'gotowanie', 'naprawa aut', 'matma', 'fizyka', 'gotowanie', 'naprawa aut'],
        szukam: ['gitara', 'programowanie', 'art'],
        ocena: 5
    }];
}

class Home extends React.Component {

    constructor(props){
        super(props);
        this.manageClickEv=this.manageClickEv.bind(this);
        this.state = {
            currentPerson: {
                imie: 'Imie Nazwisko',
                wiek: '26',
                opis: 'opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.opis mmnie i tak dalej.Jestem super gosć, w ogole cie naucze gitary i innych.',
                oferuje: ['biologia', 'matma', 'fizyka', 'gotowanie', 'naprawa aut', 'matma', 'fizyka', 'gotowanie', 'naprawa aut'],
                szukam: ['gitara', 'programowanie', 'art'],
                ocena: 5
            },
            people: currentPersonData(),
            count: 0
        }
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
        //axios.get('').then(data=>console.log(data))  
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
                let x;
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
                <Card.Group>
                    <BackTilt className="back-tilt-data-left"/>
                    <MainTilt className="main-tilt-data" theUserData={this.state.currentPerson}/> 
                    <BackTilt className="back-tilt-data-right"/>
                </Card.Group>

                <ButtonsWrapper>
                    <Button onClick={(e)=>this.manageClickEv(e)}>Odrzuć</Button>
                    <Button onClick={(e)=>this.manageClickEv(e)}>Akceptuj</Button>
                </ButtonsWrapper>
            </HomeWrapper>
        )
    }
}
export default Home;
