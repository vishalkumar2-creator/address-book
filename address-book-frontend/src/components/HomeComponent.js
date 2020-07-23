import React, { Component } from 'react';
import NavBar from './NavBarComponent';
import AllContacts from './AllContactsComponent';
import ContactDetails from './ContactDetailsComponent';
import { Jumbotron } from 'reactstrap';
function Home(props) {
    //console.log(props.details);
    return (
        <div>
            <NavBar auth={props.auth}
                logoutUser={props.logoutUser}
            />
            <div className="row">
                <div className="col-12 col-md-3 mt-3">
                    <AllContacts />
                </div>
                <div className="col-12 col-md-9">
                    <ContactDetails />
                </div>
            </div>
        </div>

    );
}
export default Home