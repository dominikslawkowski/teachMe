import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
//import semantic from 'semantic-ui';

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
        <div class="ui top attached menu">
        <div class="ui dropdown icon item">
            <i class="wrench icon"></i>
            <div class="menu">
            <div class="item">
                <i class="dropdown icon"></i>
                <span class="text">New</span>
                <div class="menu">
                <div class="item">Document</div>
                <div class="item">Image</div>
                </div>
            </div>
            <div class="item">
                Open...
            </div>
            <div class="item">
                Save...
            </div>
            <div class="item">Edit Permissions</div>
            <div class="divider"></div>
            <div class="header">
                Export
            </div>
            <div class="item">
                Share...
            </div>
            </div>
        </div>
        <div class="right menu">
            <div class="ui right aligned category search item">
            <div class="ui transparent icon input">
                <input class="prompt" type="text" placeholder="Search animals..." />
                <i class="search link icon"></i>
            </div>
            <div class="results"></div>
            </div>
        </div>
        </div>
        <div class="ui bottom attached segment">
        <p></p>
        </div>
        </Fragment>
        );
    }
}; 