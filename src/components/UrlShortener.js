import React from 'react'
import {ShortUrlForm} from "./ShortUrlForm";
import {ShortUrlView} from "./ShortUrlView";
import {ShortUrlService} from "../ShortUrlService";

export class UrlShortener extends React.Component {

    constructor(props) {
        super(props);
        this.service = new ShortUrlService();
        this.state = {shortUrl: null};
    }

    onSubmit() {
        return (longUrl) => {
            this.service.shortUrl(longUrl).then((response) => {
                console.log(response);
                this.setState({shortUrl: response.data})
            }).catch((error) => {
                console.log(error);
            });
        };
    }

    onClear() {
        return () => {
            this.setState({shortUrl: null})
        }
    }

    render() {
        return (
            <div>
                <ShortUrlForm onSubmit={this.onSubmit()} onClear={this.onClear()}/>
                <ShortUrlView shortUrl={this.state.shortUrl}/>
            </div>
        )
    }
}
