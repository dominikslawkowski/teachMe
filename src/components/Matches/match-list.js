import React from "react";
import MatchListItem from './match-list-item.js';
import { Segment, Table } from "semantic-ui-react";

export default class MatchList extends React.Component {
  render() {

    return (
      // <Table className='tabela'>
      //   <Table.Body className='tabelaBody'>

          <MatchListItem />
    );
        {/* </Table.Body>
      </Table> */}
    
  }
}
