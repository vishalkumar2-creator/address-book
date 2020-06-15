import React from 'react';
import { NavItem, Card, CardBody, Nav } from 'reactstrap';

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
                    <NavItem key={contact._id}>
                        <Card>
                            <CardBody>{contact.username}</CardBody>
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

export default ContactList;