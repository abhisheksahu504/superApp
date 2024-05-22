import { useState, useEffect } from "react";
import { FaWind } from "react-icons/fa";
import { TbDropletHalf2Filled } from "react-icons/tb";
import { UserCard } from "../components/UserCard";
import { NavLink } from "react-router-dom";
import "../components/category.css";
import { Notes } from "../components/Notes";

// const API =
//   "https://newsapi.org/v2/everything?q=tesla&from=2023-02-09&sortBy=publishedAt&apiKey=4ef9b38002184be3bf2ccb7b066196af";

export const Browse = () => {
  const [weather, setWeather] = useState(false);
  useEffect(() => {
    const fetchWeather = async () => {
      await fetch(
        "https://api.weatherapi.com/v1/current.json?key=b49fe2afd0724d48b8d122129242105&q=London&aqi=no"
      )
        .then(async (data) => await data.json())
        .then((data) => setWeather(data));
    };
    fetchWeather();
  }, []);

  // const [news, setNews] = useState();

  // fetching news api
  // const fetchNews = async () => {
  //   try {
  //     const res = await fetch(API);
  //     const data = await res.json();
  //     if (data.length > 0) {
  //       const article = data.articles[0];
  //       setNews(article);
  //     }
  //     console.log(data.articles[0]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // console.log("news", news);
  // useEffect(() => {
  //   const fetchNews = async () => {
  //     await fetch(API)
  //       .then(async (data) => await data.json())
  //       .then((res) => setNews(res.articles[0]));
  //   };
  //   fetchNews();
  // }, []);
  // time
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
    const options = { hour: "2-digit", minute: "2-digit" };
    return date.toLocaleTimeString(undefined, options);
  };
  return (
    <>
      <div className="container">
        <section>
          <section className="browse-layout">
            <div>
              <UserCard />
            </div>
            <div>
              <Notes />
            </div>
            <div>
              {/* weatherlapout */}
              {weather ? (
                <div className="weather">
                  <div className="date-time">
                    <p>{formatDate(currentDateTime)}</p>
                    <p>{formatTime(currentDateTime)}</p>
                    <p>London Weather</p>
                  </div>
                  <div className="live-weather">
                    <div>
                      <img
                        src={weather.current.condition.icon}
                        style={{ width: "50px", height: "50px" }}
                        alt="conditional icon of current eather condition"
                      />
                      <h5>{weather.current.condition.text}</h5>
                    </div>
                    <div className="left-border">
                      <h1>{weather.current.temp_c}&deg;c</h1>
                      <div className="flex">
                        <p>{weather.current.pressure_mb} mbar pressure</p>
                      </div>
                    </div>
                    <div className="left-border">
                      <div className="flex">
                        <FaWind className="small-icon" />
                        <p>
                          {weather.current.wind_kph}km/hr <br />
                          Wind
                        </p>
                      </div>
                      <div className="flex">
                        <TbDropletHalf2Filled className="small-icon" />
                        <p>
                          {weather.current.humidity} <br />
                          Humidity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            {/* news layout */}
            <div className="card">
              <div>
                <img
                  src="/everest.png"
                  width={300}
                  style={{ height: "20rem" }}
                  alt="everest mountain"
                />
                {/* <h3>{news.title}</h3> */}
                <h3>&nbsp;Title</h3>
                <p>
                  &nbsp;&nbsp;{formatDate(currentDateTime)} |{" "}
                  {formatTime(currentDateTime)}
                </p>

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
            <div
              className="btn-container"
              style={{ position: "absolute", bottom: "2vh", right: "3vw" }}
            >
              <NavLink to="/suggestion">
                <button className="next-button">Browse</button>
              </NavLink>
            </div>
          </section>
        </section>
      </div>
    </>
  );
};
