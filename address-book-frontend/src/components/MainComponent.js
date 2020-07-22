import React, { Component } from 'react';
import Login from './LoginComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, signupUser, logoutUser} from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        auth: state.auth,
        signup: state.signup,
        //details: state.details 
    }
}

const mapDispatchToProps = (dispatch) => ({
    loginUser: (creds) => dispatch(loginUser(creds)),
    signupUser: (user) => dispatch(signupUser(user)),
    logoutUser: () => dispatch(logoutUser())
});

class Main extends Component {

    render() {
        return (
            <div>

                <Switch>
                    <Route path='/login' component={() => <Login auth={this.props.auth}
                        loginUser={this.props.loginUser}
                        logoutUser={this.props.logoutUser}
                        signupUser={this.props.signupUser} />} />
                    <Route path='/home' component={() =>
                        <Home auth={this.props.auth}
                            logoutUser={this.props.logoutUser}
                            //details = {this.props.details.contact.filter((contact) => contact.username!=='') }
                        />} />
                    {
                        this.props.auth.isAuthenticated
                            ?
                            <Redirect to='/home' />
                            :
                            <Redirect to='/login' />
                    }

                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); 
