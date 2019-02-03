import React, {Component} from 'react';
import './App.css';
import {Container, Row, Col, Button} from "react-bootstrap";
import {UrlShortener} from "./components/UrlShortener";
import {TopVisitedShortUrls} from "./components/TopVisitedShortUrls";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {showTopOneHundred: false};
    }

    get mainLinkLabel() {
        if (!this.state.showTopOneHundred) {
            return 'Show top 100 most visited';
        }
        return 'Go back';
    }

    render() {
        let element = '';
        if (!this.state.showTopOneHundred) {
            element = <UrlShortener/>;
        } else {
            element = <TopVisitedShortUrls/>
        }
        return (
            <div className="App">
                <Container>
                    <Row>
                        <Col>
                            <Button variant="link" onClick={() => this.setState({showTopOneHundred: !this.state.showTopOneHundred})}>
                                {this.mainLinkLabel}
                            </Button>
                        </Col>
                    </Row>
                    {element}
                </Container>
            </div>
        );
    }
}

export default App;
