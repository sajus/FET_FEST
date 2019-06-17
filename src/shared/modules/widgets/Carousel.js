import React, { Component } from 'react';
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class Carousel extends Component {
  render() {
    const apiDetails = this.props.apiDetails;
    
    return (
      <AutoPlaySwipeableViews>
        {
          apiDetails.map((item, index) => (
            <div key={index} className="overflow-hidden">
              <img className="w-full h-auto xs:h-48 sm:h-48 md:h-48 lg:h-64" src={item.img} alt={item.name} />
            </div>
          ))
        }

      </AutoPlaySwipeableViews>
    );
  }
}
