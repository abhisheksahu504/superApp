import { useState, useEffect } from "react";
import { TiWeatherStormy, TiThermometer } from "react-icons/ti";
import { FaWind } from "react-icons/fa";
import { TbDropletHalf2Filled } from "react-icons/tb";
import { UserCard } from "../components/UserCard";
import { NavLink } from "react-router-dom";
import "../components/category.css";

const API =
  "https://newsapi.org/v2/everything?q=tesla&from=2024-04-18&sortBy=publishedAt&apiKey=fbc648dfdf2d4a3b90d118b18ad785dd";
export const Browse = () => {
  const [news, setNews] = useState(null);
  //fetching news api
  const fetchNews = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        const article = data.articles[0];
        setNews(article);
      }
      console.log(data.articles[0]);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchNews(API, setNews);
  }, []);
  //time
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date) => {
    const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
    return date.toLocaleTimeString(undefined, options);
  };
  return (
    <>
      <div className="container">
        <section className="grid">
          <section className="grid browse-layout">
            <div>
              <UserCard />
              <div className="weather">
                <div className="date-time">
                  <p>{formatDate(currentDateTime)}</p>
                  <p>{formatTime(currentDateTime)}</p>
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
            </div>

            <div className="card">
              <div>
                <img src="/everest.png" width={300} alt="" />
                <h3>\sss\\\</h3>
                <p>2-20-2023 | 07:35 PM</p>
                {/* <div className="text-overlay">
                  
                </div> */}
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
      <div className="btn-container">
        <NavLink to="/suggestion">
          <button className="next-button">Browse</button>
        </NavLink>
      </div>
    </>
  );
};
