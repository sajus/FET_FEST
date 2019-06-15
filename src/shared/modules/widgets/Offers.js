import React, { Component } from 'react';
import ImageLoader from '../utils/imageLoader';

export default class Offers extends Component {
    render() {
        const { apiData } = this.props;
        const records = apiData.offers.hits;

        return (

            records.hits.map((item, index) => (
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <ImageLoader className="rounded-lg md:w-56" src="/assets/flight/fl4.jpg" />
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                        <h2 className="mt-2 font-black">{item._source[`title`]}</h2>
                        <p className="mt-4 text-grey-dark text-sm">
                            {item._source[`description`]}
                            offer Price : {item._source[`offerPrice`]}
                        </p>
                        <p className="mt-2 text-grey-dark">
                            Valid Till : {item._source[`endDate`]}
                        </p>
                    </div>
                </div>
            ))
        )
    }
}