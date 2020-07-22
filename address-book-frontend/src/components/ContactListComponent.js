import React, { Component } from 'react';
import { NavItem, Card, CardBody, Nav } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addDetails } from '../redux/ActionCreators';
import { Details } from '../redux/detail';

const mapDispatchToProps = (dispatch) => ({
    addDetails: (contact) => dispatch(addDetails(contact))
});

class ContactList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.isLoading) {
            return (<span className="fa fa-spinner fa-pulse fa-fw"></span>);
        }
        else if (this.props.errMess) {
            return (<div className="bg-danger"><p>{this.props.errMess}</p></div>);
        }
        else {
            if (this.props.Contacts) {
                const contactl = this.props.Contacts.map((contact) => {
                    return (
                        <NavItem key={contact._id} onClick = {() => addDetails(contact)} >
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
}

export default withRouter(connect(null,mapDispatchToProps)(ContactList));