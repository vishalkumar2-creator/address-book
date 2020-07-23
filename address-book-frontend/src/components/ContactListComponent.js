import React, { Component } from 'react';
import { NavItem, Card, CardBody, Nav, Button } from 'reactstrap';
//import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addDetails } from '../redux/ActionCreators';
//import { Details } from '../redux/detail';

const mapDispatchToProps = (dispatch) => ({
    addDetails: (contact) => dispatch(addDetails(contact))
});

// const mapStateToProps = state => {
//     return {
//         details: state.details.contact
//     }
// }

function ContactList(props) {
    if (props.isLoading) {
        return (<span className="fa fa-spinner fa-pulse fa-fw"></span>);
    }
    else if (props.errMess) {
        return (<div className="bg-danger"><p>{props.errMess}</p></div>);
    }
    else {
        if (props.Contacts) {
            const contactl = props.Contacts.map((contact) => {
                return (
                    <NavItem key={contact._id} >
                        <Card >
                            <CardBody >
                                <Button onClick={() => addDetails(contact)}>{contact.username}</Button>
                            </CardBody>
                        </Card>
                    </NavItem>)

            });
            return (
                <Nav vertical>
                    {contactl}
                </Nav>
            );
        }
        else {
            return (
                <div><p>No contacts present</p></div>
            );
        }
    }
}

export default connect(null, mapDispatchToProps)(ContactList);