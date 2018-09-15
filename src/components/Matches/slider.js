import React from 'react';
import Tags from './tags.js';
import Czat from './czat.js';
import {Segment, Button} from 'semantic-ui-react';

export default class Slider extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return(
            this.props.data.id === this.props.selectedSegment ?
            <Segment className="slider">
                <Tags data={this.props.data}/>
                <Czat messages={this.props.messages} user={this.props.user} selectedSegment={this.props.selectedSegment}/>
              {/* <div className="czat">CHAT</div> */}
            </Segment> : null
        );
    }
}