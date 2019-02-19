import React from 'react'
import {ShortUrlCard} from "./ShortUrlCard";
import {ShortUrlService} from "../ShortUrlService";

export class TopVisitedShortUrls extends React.Component {

    constructor(props) {
        super(props);
        this.state = {shortUrls: null};
        this.service = new ShortUrlService();
    }

    componentDidMount() {
        this.service.getTopMostVisited().then((reponse) => {
            this.setState({shortUrls: reponse.data})
        });
    }

    render() {
        if (this.state.shortUrls) {
            return this.state.shortUrls.map((shortUrl) => {
                return (
                    <div className={'short-url-item'} key={shortUrl.id}>
                        <ShortUrlCard shortUrl={shortUrl}/>
                    </div>
                )
            });
        }
        return <div></div>;
    }
}
