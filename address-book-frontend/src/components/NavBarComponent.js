import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';



function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    if (!props.auth.isAuthenticated) {
        return (
            <Redirect to='/login' />
        );
    }
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href='/'>AddressBook</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <InputGroup >
                                <Input className="col-12" />
                                <InputGroupAddon addonType="append"><i className="fa fa-search fa-lg" /></InputGroupAddon>
                            </InputGroup>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <div className="navbar-text mr-3">{props.auth.user.username}</div>
                        {props.auth.isAuthenticated ?
                            <Button outline onClick={() => props.logoutUser()}>
                                <span className="fa fa-sign-out fa-lg"></span> Logout
                                            {props.auth.isFetching ?
                                    <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                    : null
                                }
                            </Button>
                            :
                            null
                        }
                    </Nav>
                </Collapse>
            </Navbar>

        </div>
    );
}

export default NavBar;