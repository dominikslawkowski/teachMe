import React from 'react';
import Tags from './tags.js';
import Czat from './czat.js';
import {Segment} from 'semantic-ui-react';

export default class Slider extends React.Component {
 
    render() {

        return(
            this.props.data.id === this.props.selectedSegment ?
            <Segment className="slider">
                <Tags data={this.props.data}/>
                <Czat messages={this.props.messages} user={this.props.user} selectedSegment={this.props.selectedSegment}/>
            </Segment> : null
        );
    }
}