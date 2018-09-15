import React from "react";
import { Message } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

export default class Czat extends React.Component {
  render() {
    return (
      <div className="czat">
        {/* <div>chat</div> */}

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

        {/* {this.props.messages.map(item => (
        item.idAccount === this.props.selectedSegment ?
        <Message color="gray" className="przychodzaca">
        {
            item.value
        }</Message> : null
        ))} */}

        {/* <Message color="blue" className="wychodzaca">
          Blue
        </Message>
        <Message color="gray" className="przychodzaca">
          Gray
        </Message> */}

        <div className="wpisywanie">
          <Input className="wpisz" placeholder="Wpisz wiadomość" />
          <Button className="wyslij">Wyślij</Button>
        </div>
      </div>
    );
  }
}
