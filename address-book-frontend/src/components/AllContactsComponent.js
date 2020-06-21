import React, { Component } from 'react';
import ContactList from './ContactListComponent';
import { Nav } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchContacts } from '../redux/ActionCreators';


const mapStateToProps = state => {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchContacts: () => dispatch(fetchContacts())
});

class AllContacts extends Component {
    componentDidMount() {
        this.props.fetchContacts();
    }

    render() {
        console.log(this.props.contacts.contacts);
        return (
            <div>
                <h3>Contact List</h3>
                <ContactList Contacts={this.props.contacts.contacts}
                    isLoading={this.props.contacts.isLoading}
                    errMess={this.props.contacts.errMess} />
            </div>
        );
    }
}




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AllContacts));