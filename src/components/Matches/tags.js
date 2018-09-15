import React from "react";
import { Button } from "semantic-ui-react";

export default class Tags extends React.Component {
  render() {

    return (
      <div className='tagi'>
        <div className='tagsTitle'>Mogę Cię nauczyć:</div>
        {this.props.data.skills.map(item => (
          <Button inverted color='blue'>
          {item}
        </Button>

        ))}
      </div>
    );
  }
}
