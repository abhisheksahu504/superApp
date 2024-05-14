import React from "react";
import { TiWeatherStormy, TiThermometer } from "react-icons/ti";
import { FaWind } from "react-icons/fa";
import { TbDropletHalf2Filled } from "react-icons/tb";

export const Browse = () => {
  return (
    <>
      <div className="container">
        <section className="grid">
          <section className="grid grid-two-cols">
            <div className="weather">
              <div className="date-time">
                <p>27-6-2001</p>
                <p>22:23</p>
              </div>
              <div className="live-weather">
                <div>
                  <TiWeatherStormy className="icon" />
                  <h5>Heavy Rain</h5>
                </div>
                <div className="left-border">
                  <h1>24&deg;c</h1>
                  <div className="flex">
                    <TiThermometer className="small-icon" />
                    <p>1010 mbar pressure</p>
                  </div>
                </div>
                <div className="left-border">
                  <div className="flex">
                    <FaWind className="small-icon" />
                    <p>
                      37.5km/hr <br />
                      Wind
                    </p>
                  </div>
                  <div className="flex">
                    <TbDropletHalf2Filled className="small-icon" />
                    <p>
                      83% <br />
                      Humidity
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div>
                <img src="/everest.png" width={300} alt="" />
                <div className="text-overlay">
                  <h3>Want to climb Mount Everest?</h3>
                  <p>2-20-2023 | 07:35 PM</p>
                </div>
              </div>
              <div className="padding">
                <p>
                  In the years since human beings first reached the summit of
                  Mount Everest in 1953, climbing the world’s highest mountain
                  has changed dramatically. Today, hundreds of mountaineers
                  manage the feat each year thanks to improvements in knowledge,
                  technology, and the significant infrastructure provided
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};
