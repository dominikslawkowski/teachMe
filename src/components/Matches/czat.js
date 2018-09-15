import React from "react";
import { Message } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDoubleRight);

export default class Czat extends React.Component {
  render() {
    return (
      <div className="czat">
        {this.props.messages.map(item => (
        item.idAccount === this.props.user.id ?
        <Message color="gray" className="wychodzaca">
        {
            item.value
        }</Message> : 
        item.idAccount === this.props.selectedSegment ?
        <Message color="blue" className="przychodzaca">
        {
            item.value
        }</Message> : null
        ))}

        <div className="wpisywanie">
          <Input className="wpisz" placeholder="Wpisz wiadomość" />
          <Button className="wyslij"><FontAwesomeIcon icon="angle-double-right" /></Button>
        </div>
      </div>
    );
  }
}
