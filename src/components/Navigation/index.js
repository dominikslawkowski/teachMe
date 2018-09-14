import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
import { StyledMenu, Logo, StyledItem } from './style';

export class Navigation extends React.Component {
    render(){
        return(
            <StyledMenu inverted>
                <Menu.Item>
                <Link to="/">
                    <Logo>
                        teachMe
                    </Logo>
                </Link>
                </Menu.Item>
                <Dropdown text='Menu' pointing='right' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item>
                            <Link to="/profil">
                                <StyledItem>Moje konto</StyledItem>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="/pary">
                                <StyledItem>Pary</StyledItem>
                            </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to="/logowanie">
                                <StyledItem>Wyloguj</StyledItem>
                            </Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </StyledMenu>
        );
    }
}; 