import React from 'react';
import {Card} from 'semantic-ui-react';


class BackTilt extends React.Component {
    pseudoName(){
        const tab = ['Mr. Pro Fesore', 'Panna Uczyciel', 'Ms. Pirate Teach', 'P.E. da Gog', 'Uczeń Nica', 'Mr. Pro Fesore', 'Panna Uczyciel', 'Ms. Pirate Teach', 'P.E. da Gog', 'Uczeń Nica', 'Mr. Pro Fesore', 'Panna Uczyciel', 'Ms. Pirate Teach', 'P.E. da Gog', 'Uczeń Nica'];
        let x = Math.floor((Math.random()*10));
        return tab[x];
    }
    pseudoAd() {
        const tab = ['Twój uczeń?', 'Twój nauczyciel?', 'Wymiana wiedzy?', 'Zróbmy projekt!', 'Szukam kogoś, kto mi wytłumaczy...', 'Uczę: siebie/ciebie',, 'Twój nauczyciel?', 'Wymiana wiedzy?', 'Zróbmy projekt!', 'Szukam kogoś, kto mi wytłumaczy...', 'Uczę: siebie/ciebie'];
        let x = Math.floor((Math.random() * 10));
        return tab[x];
    }
    pseudoImgUrl(){
        let tab = [
            'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            'https://react.semantic-ui.com/images/avatar/large/rachel.png',
            'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            'https://react.semantic-ui.com/images/avatar/large/rachel.png',
            'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            'https://react.semantic-ui.com/images/avatar/large/rachel.png',
            'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            'https://react.semantic-ui.com/images/avatar/large/rachel.png',
            'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            'https://react.semantic-ui.com/images/avatar/large/rachel.png',
            'https://react.semantic-ui.com/images/avatar/large/matthew.png',
            'https://react.semantic-ui.com/images/avatar/large/rachel.png',
        ]
        let z = Math.floor(Math.random()*10);
        return tab[z];
        
    }
    render () {
        return(
            <Card className = {this.props.className}
                image={this.pseudoImgUrl()}
                header={this.pseudoAd()}
                meta={this.pseudoName()}
                description='Sprawdź ich wszystkich'
        
            />
            

        )
    }
}
export default BackTilt;
