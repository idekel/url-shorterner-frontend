import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import {Container} from "react-bootstrap";
import {UrlShortener} from "./components/UrlShortener";
import {TopVisitedShortUrls} from "./components/TopVisitedShortUrls";
import {Header} from "./components/Header";
import {Login} from "./components/Login";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {showTopOneHundred: false};
    }

    render() {
        return (
            <div className="App">
                <Container>
                    <BrowserRouter>
                        <div>
                            <Header/>
                            <Switch>
                                <Route exact path="/" component={UrlShortener}/>
                                <Route path="/top/100" component={TopVisitedShortUrls}/>
                                <Route path="/login" component={Login}/>
                            </Switch>
                        </div>
                    </BrowserRouter>
                </Container>
            </div>
        );
    }
}

export default App;
