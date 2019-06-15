import React, { Component } from 'react';
import ImageLoader from '../utils/imageLoader';

export default class Stores extends Component {
  render() {
    const { apiData } = this.props;
    const records = apiData.stores.hits;
    return (
      <div className="bg-white rounded max-w-5xl mx-auto mt-4">
        <div className="pt-4 px-4 text-lg font-semibold">
          <div>Our Stores</div>
          <div className="border-b-4 border-yellow w-8 h-4">&nbsp;</div>
        </div>

        <div className="flex flex-wrap p-2">
          {
            records.hits.map((item, index) => (
              (index < 12) &&
              <div key={index} className="xs:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
                <div className="border-solid border m-2 p-4 text-center">
                  <ImageLoader classname="w-1/2 h-auto" src={item._source[`image`]} alt={item._source[`name`]} />
                </div>
                
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
