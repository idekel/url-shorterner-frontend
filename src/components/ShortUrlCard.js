import React from 'react'
import {Row, Card, Col, Button} from "react-bootstrap";
import PropTypes from 'prop-types'

export class ShortUrlCard extends React.Component {

    copyToClickBoard() {
        const el = document.createElement('textarea');
        el.value = this.props.shortUrl.hashUrl;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    render() {
        return (
            <Row className={'justify-content-center'}>
                <Col md='6'>
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <span>{this.props.shortUrl.longUrl}</span>
                            </Card.Title>
                            <div>
                                <a href={this.props.shortUrl.hashUrl} rel="noopener noreferrer" target='_blank'>{this.props.shortUrl.hashUrl}</a>
                                <span style={{paddingLeft: '10px'}}>
                                    <Button size='small' variant='outline-info'
                                            onClick={() => this.copyToClickBoard()}>Copy</Button>
                                </span>
                                <div className={'viewCount'}>
                                    <span>
                                    <b>{this.props.shortUrl.viewCount}</b>
                                    <i className={'fas fa-chart-line'}></i>
                                </span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }
}

ShortUrlCard.propTypes = {
    shortUrl: PropTypes.object.isRequired
}
