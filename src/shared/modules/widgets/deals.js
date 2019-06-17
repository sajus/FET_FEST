import React, { Component } from 'react';
import ImageLoader from '../utils/imageLoader';

export default class Deals extends Component {
  render() {
    return (
      <div className="bg-white rounded max-w-5xl mx-auto">
        <div className="flex justify-between">
          <div className="pt-4 px-4 text-lg font-semibold">
            <div>Deals of the day</div>
            <div className="border-b-4 border-yellow w-8 h-4">&nbsp;</div>
          </div>
          <div className="flex">
              <div className="pt-4 px-4">
                  <ImageLoader classname="w-4 h-auto" src="/assets/images/back.svg" alt="aris" />
              </div>
              <div className="pt-4 px-4">
                  <ImageLoader classname="w-4 h-auto" src="/assets/images/next.svg" alt="aris" />
              </div>
          </div>
        </div>



        <div className="flex flex-wrap w-full pb-4">
          <div className="flex xl:w-1/2 w-full xl:pl-8 p-2 xl:border-r xs:border-b sm:border-b md:border-b border-dotted border-grey">
            <div className="flex flex-wrap w-full">
              <div className="flex md:w-1/2 lg:w-1/2 xl:w-1/2 w-full xl:px-2 ">
                <div className="xs:text-center sm:text-center md:text-center lg:text-center w-full">
                  <div><ImageLoader classname="w-64 h-auto" src="/assets/images/deals_01.png" alt="partstrain" /></div>
                  <div className="text-orange font-semibold text-base italic py-2">$20 Prepaid Mastercard&reg; Card</div>
                </div>
              </div>

              <div className="md:w-1/2 lg:w-1/2 xl:w-1/2 w-full xs:text-center sm:text-center md:text-left">

                <div className="">
                  <div>
                    <ImageLoader classname="w-20 h-auto" src="/assets/images/afe_logo.jpg" alt="aris" />
                  </div>
                  <div className="text-black font-semibold text-lg pt-2">
                    AFE Cold Air Intake
                </div>
                  <div className="text-grey text-xs pt-1">
                    *Complete form to receive rebate.
                </div>
                  <div className="flex pt-4 text-center xs:justify-center sm:justify-center w-full">
                    <div className="p-1 w-16 border-solid border-2 mr-2">
                      <span className="text-black font-bold text-lg">232</span><br />
                      <span className="text-grey text-xs pt-1">DAYS</span>
                    </div>
                    <div className="p-1 w-16 border-solid border-2 mr-2">
                      <span className="text-black font-bold text-lg">12</span><br />
                      <span className="text-grey text-xs pt-1">HRS</span>
                    </div>
                    <div className="p-1 w-16 border-solid border-2 mr-2">
                      <span className="text-black font-bold text-lg">17</span><br />
                      <span className="text-grey text-xs pt-1">MINS</span>
                    </div>
                    <div className="p-1 w-16 border-solid border-2 mr-2">
                      <span className="text-black font-bold text-lg">19</span><br />
                      <span className="text-grey text-xs pt-1">SECS</span>
                    </div>
                  </div>
                  <div>
                    <button className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 mt-4 rounded">
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="xl:w-1/2  w-full">
            <div className="flex justify-between xs:text-center sm:text-center px-8 pt-2 border-b border-dotted border-grey p-3 mx-5">
              <div className="flex xs:flex-wrap sm-flex-wrap md-flex-wrap w-full">
                <div className="w-full p-2 pt-0 xl:w-1/3">
                  <div className="text-center">
                    <div><ImageLoader classname="w-24 h-auto" src="/assets/images/deals_02.png" alt="partstrain" /></div>
                    <div className="text-orange text-xs italic py-2">$20 Prepaid Mastercard &reg; Card</div>
                  </div>
                </div>
                  <div className="w-full xl:w-2/3 ml-4">
                  <div className="">
                    <div className="text-black font-semibold text-sm">
                      AFE Air Filter <span className="ml-2"><ImageLoader classname="w-20 h-auto" src="/assets/images/afe_logo.jpg" alt="aris" /></span>
                    </div>
                    <div className="text-grey text-xs pt-1">
                      *Complete form to receive rebate.
                    </div>
                    <div className="xl:flex pt-2 w-full">
                      <span className="text-black text-sm">Promo Ends: 12 days 05:41:48</span>
                    </div>
                    <div className="xl:flex items-center">
                      <div className="font-bold text-base mt-2">
                        $149.99
                      </div>
                      <div>
                        <button className="bg-blue hover:bg-blue-dark text-white text-sm font-bold py-1 px-2 xl:ml-4 mt-2 rounded">
                          SHOP NOW
                    </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between xs:text-center sm:text-center px-8 pt-2">
              <div className="flex xs:flex-wrap sm-flex-wrap md-flex-wrap w-full">
                <div className="w-full p-2 pt-0 xl:w-1/3">
                  <div className="text-center">
                    <div><ImageLoader classname="w-24 h-auto" src="/assets/images/deals_03.png" alt="partstrain" /></div>
                    <div className="text-orange text-xs italic py-2">$20 Prepaid Mastercard &reg; Card</div>
                  </div>
                </div>
                  <div className="w-full xl:w-2/3 ml-4">
                  <div className="">
                    <div className="text-black font-semibold text-sm">
                      AFE Products <span className="ml-2"><ImageLoader classname="w-20 h-auto" src="/assets/images/afe_logo.jpg" alt="aris" /></span>
                    </div>
                    <div className="text-grey text-xs pt-1">
                      *Complete form to receive rebate.
                    </div>
                    <div className="xl:flex pt-2 w-full">
                      <span className="text-black text-sm">Promo Ends: 15 days 05:41:48</span>
                    </div>
                    <div className="xl:flex items-center">
                      <div className="font-bold text-base mt-2">
                        $259.00
                      </div>
                      <div>
                        <button className="bg-blue hover:bg-blue-dark text-white text-sm font-bold py-1 px-2 xl:ml-4 mt-2 rounded">
                          SHOP NOW
                    </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
