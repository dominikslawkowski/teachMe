import React from 'react';
import {Card, Image, Icon} from 'semantic-ui-react';
import {Imag} from './style.js';
import {Wrapper} from './style.js';

class MainTilt extends React.Component {
    
    manageStars(x) {
        var ocena=x;
        var gwiazdy=[];
        if (x>0){
            for (let i = 0; i < ocena; i++) {
                gwiazdy.push(<Icon name='star' />)
            }
        }
        return gwiazdy;
    }
 
    displayStars(){
        const ocena = this.props.theUserData.ocena;
        if (ocena>0){
            return <a>{this.manageStars(ocena)} ocena: {ocena}</a>
        } else {
            return <a>Użytkownik nie ma ocen</a>
        }
    }

    displayOffer() {
        return this.props.theUserData.teachSkills.map((item) => {
            return <div className={"maciek-middle_tag-itself1"}>{item.name}</div>
        });
    }

    displaySearch() {
        return this.props.theUserData.learnSkills.map((item) => {
            return <div className={"maciek-middle_tag-itself2"}>{item.name}</div>
        });
    }

    displayName(){
        return this.props.theUserData.name + ' ' + this.props.theUserData.surname;
    }

    displayAge() {
        return this.props.theUserData.age+' '+'l.'
    }

    displayDescription() {
        return this.props.theUserData.description;
    }
    
    render () {
        return (
            <Wrapper className={'maciek-middle' + ' ' +this.props.className}>
                <div className="maciek-middle_head-wrapper">
                    <Imag className="maciek-middle_image" imageUrl={'https://react.semantic-ui.com/images/avatar/large/matthew.png'}/>
                    <div className="maciek-middle_head">
                        <div className="maciek-middle_head_im-naz">
                            <p>{this.displayName()}</p>
                            <p>{this.displayAge()}</p>
                        </div>
                        <div className="maciek-middle_head_op">
                            {this.displayDescription()}
                        </div>
                    </div>
                </div>
                <div className="maciek-middle_tags">
                    <div className="maciek-middle_tags_col">
                        <p className="title">Oferuję</p>
                        {this.displayOffer()}
                    </div>
                    <div className="maciek-middle_tags_col">
                        <p className="title">Szukam</p>
                        {this.displaySearch()}
                    </div>
                </div>
                <div className="maciek-middle_grad">
                    <Card.Content extra>
                        {this.displayStars(5)}
                    </Card.Content>
                </div>
            </Wrapper>    
        )
    }
}
export default MainTilt;