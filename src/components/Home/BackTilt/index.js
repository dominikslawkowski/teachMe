import React from 'react';
import {Card} from 'semantic-ui-react';


class BackTilt extends React.Component {
    pseudoName(){
        const tab = ['Mr. Pro Fesore', 'Panna Uczyciel', 'Ms. Pirate Teach', 'P.E. da Gog', 'Uczeń Nica', 'Mr. Pro Fesore', 'Panna Uczyciel', 'Ms. Pirate Teach', 'P.E. da Gog', 'Uczeń Nica', 'Mr. Pro Fesore', 'Panna Uczyciel', 'Ms. Pirate Teach', 'P.E. da Gog', 'Uczeń Nica'];
        let x = Math.floor((Math.random()*10));
        return tab[x];
    }
    pseudoAd() {
        const tab = ['Twój uczeń?', 'Twój nauczyciel?', 'Wymiana wiedzy?', 'Zróbmy projekt!', 'Szukam kogoś, kto mi wytłumaczy...', 'Uczę: siebie/ciebie', 'Twój nauczyciel?', 'Wymiana wiedzy?', 'Zróbmy projekt!', 'Szukam kogoś, kto mi wytłumaczy...', 'Uczę: siebie/ciebie'];
        let x = Math.floor((Math.random() * 10));
        return tab[x];
    }
    render () {
        return(
            <Card className = {this.props.className}
                image='https://react.semantic-ui.com/images/avatar/large/matthew.png'
                header={this.pseudoAd()}
                meta={this.pseudoName()}
                description='Sprawdź ich wszystkich'
        
            />
            

        )
    }
}
export default BackTilt;
