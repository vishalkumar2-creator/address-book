import React, { Component } from 'react';
import NavBar from './NavBarComponent';
import AllContacts from './AllContactsComponent';
import { Jumbotron } from 'reactstrap';
function Home(props) {
    return (
        <div className="col-12">
            <NavBar auth={props.auth}
                logoutUser={props.logoutUser}
            />
            <div className="col-12 col-md-4">
                <AllContacts />
            </div>
        </div>

    );
}
export default Home