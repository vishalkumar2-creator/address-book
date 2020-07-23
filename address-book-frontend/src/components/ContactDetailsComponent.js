import React from 'react';
import { } from 'reactstrap';
//import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        details: state.details.contact
    }
}
function ContactDetails(props) {
    console.log(props.details);
    if (props.details) {
        return (
            <div className="container">
                <h3>username: </h3>
                <p>{props.details.username}</p>
            </div>
        )
    }
    else {
        return (<div></div>);
    }
}

export default connect(mapStateToProps)(ContactDetails);