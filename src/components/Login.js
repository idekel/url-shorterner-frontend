import React from 'react';
import {Form, Button, Row, Col} from "react-bootstrap";

export class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                password: '',
                email: '',
                rememberToken: false
            },
            validated: false
        };
    }

    onChange = (e) => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let form = {...this.state.form};
        form[target.name] = value;
        this.setState({form: form});
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!e.target.checkValidity()) {
            console.log(e.target)
        }
        this.setState({validated: true});
    };

    render() {
        return (
            <div>
                <Row className={'justify-content-md-center'}>
                    <Col md={'6'}>
                        <Form onSubmit={this.onSubmit} noValidate validated={this.state.validated}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control required type="email" placeholder="Enter email"
                                              value={this.state.form.email} onChange={this.onChange} name={'email'}/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                                <Form.Control.Feedback type="invalid">Please insert a valid
                                    email</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" value={this.state.form.password}
                                              onChange={this.onChange} name={'password'} placeholder="Password"/>
                                <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" value={this.state.form.rememberToken}
                                            onChange={this.onChange}
                                            name={'rememberToken'} label="Check me out"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}
