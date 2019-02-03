import React from 'react'
import {Col, Row, Form, Button, Alert} from "react-bootstrap";


export class ShortUrlForm extends React.Component {


    constructor(props) {
        super(props)
        this.state = {longUrl: props.longUrl, valid: true}
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.props.onSubmit && this.validateUrl()) {
            this.props.onSubmit(this.state.longUrl)
        } else if (this.props.onClear) {
            this.props.onClear();
        }
    }

    validateUrl() {
        try {
            new URL(this.state.longUrl);
            this.setState({valid: true});
            return true
        } catch (e) {
            this.setState({valid: false});
            return false;
        }
    }

    render() {
        let alert = '';
        if (!this.state.valid) {
            alert = <Row style={{paddingTop: '10px'}} className={'justify-content-center'}><Alert variant='danger'>The URL is invalid. Please input a valid URL</Alert></Row>
        }
        return (
            <div className={'ShortUrlForm'}>
                <Form onSubmit={(e) => this.onSubmit(e)}>
                    <Row>
                        <Col>
                            <Form.Control size='lg'
                                          onChange={(e) => this.setState({longUrl: e.target.value})}/>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={4}>
                            <Button type='submit' style={{width: '100%'}} size='lg'> Send </Button>
                        </Col>
                    </Row>
                    {alert}
                </Form>
            </div>
        )
    }
}
