import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react';

export class Navigation extends React.Component {
    render(){
        return(
        //   <Nav>
        //     <Span>KorpeX</Span>
        //     <Border />
        //     <Link to="/">
        //          <span>teachMe</span>
        //     </Link>
            
        //     <Link to="/rezerwacja">
        //          <span>Reservation</span>
        //     </Link>
        //     <Link to="/statystyka">
        //          <span>Statistics</span>
        //     </Link>
        //   </Nav>
        <Fragment>
            <Menu attached='top'>
            <Dropdown item icon='wrench' simple>
                <Dropdown.Menu>
                <Dropdown.Item>
                    <Icon name='dropdown' />
                    <span className='text'>New</span>

                    <Dropdown.Menu>
                    <Dropdown.Item>Document</Dropdown.Item>
                    <Dropdown.Item>Image</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>Open</Dropdown.Item>
                <Dropdown.Item>Save...</Dropdown.Item>
                <Dropdown.Item>Edit Permissions</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Export</Dropdown.Header>
                <Dropdown.Item>Share</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Menu.Menu position='right'>
                <div className='ui right aligned category search item'>
                <div className='ui transparent icon input'>
                    <input className='prompt' type='text' placeholder='Search animals...' />
                    <i className='search link icon' />
                </div>
                <div className='results' />
                </div>
            </Menu.Menu>
            </Menu>

            <Segment attached='bottom'>
            <img src='/images/wireframe/paragraph.png' />
            </Segment>
        </Fragment>
        );
    }
}; 