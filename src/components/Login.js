import React, {Component} from 'react';
import {Form, Grid, Header, Message, Segment} from 'semantic-ui-react'
import {Redirect} from "react-router-dom";
import {AppContext} from "../context/AppContext";


class Login extends Component {
    static contextType = AppContext


    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            error: false,
            success: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        if (event.target.placeholder === "Username")
            this.setState({username: event.target.value})
        else if (event.target.placeholder === "Password")
            this.setState({password: event.target.value})
    }

    handleLogin(event) {
        event.preventDefault();
        const {global} = this.context // this can be used because of the contextType
        if (global.user.authenticated)
            this.setState({
                success: !this.state.success
            })
        else
            this.setState({
                error: !this.state.error
            })
    }

    render() {
        if (this.state.success)
            return <Redirect to={"/protected"}/>
        else
            return (
                <div>
                    <Grid textAlign='center' style={{height: '100vh'}} verticalAlign='middle'>
                        <Grid.Column style={{maxWidth: "70%"}}>
                            <Header as='h2' color='teal' textAlign='center'>
                            </Header>
                            <Form size='large' error={this.state.error} onSubmit={this.handleLogin}>
                                <Segment stacked>
                                    <Form.Input
                                        fluid
                                        icon='user'
                                        iconPosition='left'
                                        placeholder='Username'
                                        type='text'
                                        value={this.state.username}
                                        onChange={this.handleChange}
                                    />
                                    <Form.Input
                                        fluid
                                        icon='lock'
                                        iconPosition='left'
                                        placeholder='Password'
                                        type='password'
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                    <button className="ui fluid large teal submit button"
                                            disabled={!this.state.username || !this.state.password}>
                                        Login
                                    </button>
                                    {/** Button causes an Unmount Error */}
                                    {
                                        this.state.error ? <Message error
                                                                    icon="frown"
                                                                    header={"Mashallah!"}
                                                                    content={"Was ist das ein Login Bruda!"}/> : null
                                    }
                                </Segment>
                            </Form>
                            <Message>
                                New to us? Sign Up
                            </Message>
                        </Grid.Column>
                    </Grid>
                </div>
            );
    }
}

export default Login;