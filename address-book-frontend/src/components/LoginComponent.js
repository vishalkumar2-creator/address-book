import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    toggle(tab) {
        if (this.state.activeTab != tab) {
            this.setState({ activeTab: tab })
        }
    }
    handleLogin(event) {
        this.props.loginUser({ username: this.username.value, password: this.password.value });
        alert(JSON.stringify({ username: this.username.value, password: this.password.value }))
        event.preventDefault();
    }
    handleRegister(event) {
        this.props.signupUser({
            username: this.usernameS.value,
            password: this.passwordS.value,
            firstname: this.firstname.value,
            lastname: this.lastname.value,
            phone: this.phone.value,
            emailid: this.emailid.value,
            tele: this.tele.value,
            address: this.address.value,
            description: this.description.value,
            image: "no image"
        });
        alert(JSON.stringify({
            username: this.usernameS.value,
            password: this.passwordS.value,
            firstname: this.firstname.value,
            lastname: this.lastname.value,
            phone: this.phone.value,
            emailid: this.emailid.value,
            tele: this.tele.value,
            address: this.address.value,
            description: this.description.value,
            image: "no image"
        }));
        event.preventDefault();
    }
    render() {
        if (this.props.auth.isAuthenticated) {
            console.log(this.props.auth.isAuthenticated + " " + JSON.stringify(this.props.auth.user));
            return (<Redirect to="/home" />);
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 mx-auto">
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}>
                                    Login
            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}>
                                    Register
            </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                {this.state.activeTab == 1 ?

                                    <Card>

                                        <CardBody>
                                            <Form onSubmit={this.handleLogin}>
                                                <FormGroup>
                                                    <Label htmlFor="username">Username</Label>
                                                    <Input type="text" id="username" name="username"
                                                        innerRef={(input) => this.username = input} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label htmlFor="password">Password</Label>
                                                    <Input type="password" id="password" name="password"
                                                        innerRef={(input) => this.password = input} />
                                                </FormGroup>
                                                <FormGroup check>
                                                    <Label check>
                                                        <Input type="checkbox" name="remember"
                                                            innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                                                </FormGroup>
                                                <Button type="submit" value="submit" color="primary">Login</Button>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                    : null}
                            </TabPane>
                            <TabPane tabId="2">
                                {this.state.activeTab == 2 ?

                                    <Card>

                                        <CardBody>
                                            <Form onSubmit={this.handleRegister}>
                                                <FormGroup>
                                                    <Label htmlFor="firstname">First Name :</Label>
                                                    <Input type="text" id="firstname" name="firstname"
                                                        innerRef={(input) => this.firstname = input} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label htmlFor="lastname">Last Name :</Label>
                                                    <Input type="text" id="lastname" name="lastname"
                                                        innerRef={(input) => this.lastname = input} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label htmlFor="username">Username :</Label>
                                                    <Input type="text" id="username" name="username"
                                                        innerRef={(input) => this.usernameS = input} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label htmlFor="password">Password :</Label>
                                                    <Input type="password" id="password" name="password"
                                                        innerRef={(input) => this.passwordS = input} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label htmlFor="emailid">Email Id :</Label>
                                                    <Input type="email" id="emailid" name="emailid"
                                                        innerRef={(input) => this.emailid = input} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label htmlFor="phone">Phone :</Label>
                                                    <Input type="text" id="phone" name="phone"
                                                        innerRef={(input) => this.phone = input} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label htmlFor="tele">Tele no :</Label>
                                                    <Input type="text" id="tele" name="tele"
                                                        innerRef={(input) => this.tele = input} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label htmlFor="address">Address :</Label>
                                                    <Input type="textarea" id="address" name="address"
                                                        innerRef={(input) => this.address = input} />
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label htmlFor="description">Description :</Label>
                                                    <Input type="textarea" id="description" name="description"
                                                        innerRef={(input) => this.description = input} />
                                                </FormGroup>
                                                <Button type="submit" value="submit" color="primary">Register</Button>
                                            </Form>
                                        </CardBody>
                                    </Card>
                                    : null}
                            </TabPane>
                        </TabContent>

                    </div>

                </div>
            </div>

        );
    }
}

export default Login;