import React from 'react'
import {ShortUrlCard} from "./ShortUrlCard";

export class ShortUrlView extends React.Component {

    render() {
        if (this.props.shortUrl) {
            return (
                <div>
                    <ShortUrlCard shortUrl={this.props.shortUrl}/>
                </div>
            )
        }
        return (<div></div>)
    }
}
