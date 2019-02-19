import React from 'react'
import {Button, Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export class Header extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Button variant="link">
                            <Link to={'top/100'}>top 100</Link>
                        </Button>
                    </Col>
                </Row>
                <div style={{paddingTop: '10%'}}>
                    <Row className={'justify-content-md-center'}>
                        <div style={{textAlign: 'center'}}>
                            <Col md={4}>
                                <h1 style={{fontSize: '10em'}}>
                                    Short
                                    <small style={{fontSize: '40%', color: '#007bff'}}>.Url</small>
                                </h1>
                            </Col>
                        </div>
                    </Row>
                </div>
            </div>
        );
    }
}
