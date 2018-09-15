import React from "react";
import { Table, Segment } from "semantic-ui-react";
import Slider from "./slider.js";
import Tags from "./tags.js";

export default class MatchListItem extends React.Component {
  constructor(props) {
    super(props),

    this.state = {
        data: [
            {
                id: 0,
                imie: "Adam",
                zdjecie: (
                  <img src="https://pbs.twimg.com/profile_images/960347893914898432/H0tA4G8k_400x400.jpg" />
                ),
                wiek: "22",
                skills : [
                    'gitara',
                    'rysowanie',
                    'programowanie'
                  ]
              },
              {
                id: 1,
                imie: "Maciek",
                zdjecie: (
                  <img src="https://pbs.twimg.com/profile_images/960347893914898432/H0tA4G8k_400x400.jpg" />
                ),
                wiek: "23",
                skills : [
                    'bungee',
                    'rower',
                    'łyżwy'
                  ]
              },
              {
                id: 2,
                imie: "Michał",
                zdjecie: (
                  <img src="https://pbs.twimg.com/profile_images/960347893914898432/H0tA4G8k_400x400.jpg" />
                ),
                wiek: "26",
                skills : [
                    'łucznictwo',
                    'narty',
                    'skakanka'
                  ]
              }
        ],
        messages: [
            {idAccount: 0,
                date: '15.09.2018 00:00',
                value: 'Hej'
            },
            {idAccount: 1,
                date: '15.09.2018 00:01',
                value: 'Hi'
            },
            {idAccount: 2,
                date: '15.09.2018 00:02',
                value: 'Hello'
            },
            {idAccount: 0,
                date: '15.09.2018 00:03',
                value: 'Hey'
            },
            {idAccount: 1,
                date: '15.09.2018 00:04',
                value: 'Halo'
            },
            {idAccount: 2,
                date: '15.09.2018 00:05',
                value: 'Hej'
            },
        ],
        user: {
            id: 1,
                imie: "maciek",
                zdjecie: (
                  <img src="https://pbs.twimg.com/profile_images/960347893914898432/H0tA4G8k_400x400.jpg" />
                ),
                wiek: "23",
                skills : [
                    'bungee',
                    'rower',
                    'łyżwy'
                  ]
        },

         selectedSegment: null
        
    }
     this.showSlider= this.showSlider.bind(this)
  }

  showSlider(id) {
     this.setState({ selectedSegment: id } )
}

  render() {


    return (
      <div>
        {this.state.data.map((item, index) => (
          <Segment key={item.id} className="line" onClick={() => {this.showSlider(item.id)}}>
            <Table.Cell>{item.zdjecie}</Table.Cell>
            <Table.Cell className='imie'>{item.imie}</Table.Cell>
            <Table.Cell className='wiek'>{item.wiek} l.</Table.Cell>
            <Slider messages = {this.state.messages} user = {this.state.user} data={this.state.data[index]} selectedSegment={this.state.selectedSegment} />
          </Segment>
        ))}
            
      </div>
    );
  }
}


